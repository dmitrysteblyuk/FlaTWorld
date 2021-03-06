(function simpleFogOfWar() {
  /*-----------------------
  --------- IMPORT --------
  -----------------------*/
  const { PIXI } = window.flatworld_libraries;
  const { mapEvents, generalUtils } = window.flatworld;
  const { resize } = window.flatworld.utils;

  /*-----------------------
  ---------- API ----------
  -----------------------*/
  window.flatworld.extensions.fogOfWars.simpleFogOfWar = setupSimpleFogOfWar();

  /*-----------------------
  -------- PUBLIC ---------
  -----------------------*/
  /**
   * Simple fog of war works with circles around objects
   *
   * @namespace flatworld.extensions.fogOfWars
   * @class pixelizedMinimap
   **/
  function setupSimpleFogOfWar() {
    const VIEWPORT_MULTIPLIER = 0.4;
    const maskSprite = new PIXI.Sprite(PIXI.Texture.EMPTY);
    const renderTexture = new PIXI.RenderTexture(new PIXI.BaseRenderTexture(resize.getWindowSize().x, resize.getWindowSize().y));
    const FoWOverlay = new PIXI.Graphics();
    let movableLayer;
    let staticLayer;
    let mapRenderer;
    let map;
    let maskMovableContainer;
    let maskStageContainer;
    let FoWCB;
    let objectsForFoW;
    let color;

    return {
      // These two are required by all plugins
      init,
      pluginName: 'simpleFogOfWar',

      activateFogOfWar,
      refreshFoW,
      getFoWObjectArray,
      calculateCorrectCoordinates,
    };
    /**
     * Ínitialize as a plugin. Done by the Flatworld class.
     *
     * After plugin has been initialized by the flatworld, you must still call activateFogOfWar to
     * start showing it.
     *
     * @todo the offsets are really bad! For some reason they are needed, I don't know where the
     * issue lies :(. We probably need an offset for the renderer in the end anyway, but now it
     * doesn't even work properly without them.
     * can be used here and in getViewportArea-method etc.
     *
     * @method init
     * @param  {Map} givenMap     Instance of Map
     */
    function init(givenMap) {
      map = givenMap;
      map.activateFogOfWar = activateFogOfWar;
      movableLayer = map.getMovableLayer();
      staticLayer = map.getStaticLayer();
      mapRenderer = map.getRenderer();

      maskStageContainer = map.createSpecialLayer('FoWStageMaskLayer');
      maskMovableContainer = map.createSpecialLayer('FoWMovableMaskLayer');
      maskMovableContainer.x = movableLayer.x;
      maskMovableContainer.y = movableLayer.y;
    }

    function activateFogOfWar(cb, filter, options = {}) {
      color = options.color || 0x222222;
      FoWCB = cb;
      objectsForFoW = map.getPrimaryLayers({ filters: filter }).map(o => o.getObjects(filter));
      objectsForFoW = generalUtils.arrays.flatten2Levels(objectsForFoW);

      createOverlay();

      setupFoW();
      setEvents();
    }

    function setupFoW() {
      const spriteArray = getFoWObjectArray(FoWCB);

      resetFoW(FoWOverlay);

      if (spriteArray.length > 0) {
        maskMovableContainer.addChild(...spriteArray);
      }

      maskStageContainer.filterArea = new PIXI.Rectangle(0, 0, mapRenderer.width, mapRenderer.height);
      resizeFoW();

      staticLayer.mask = maskSprite;
    }

    function refreshFoW() {
      mapRenderer.render(maskStageContainer, renderTexture, true, null, false);

      maskSprite.texture = renderTexture;
    }

    function moveFoW() {
      maskMovableContainer.position = movableLayer.position;

      refreshFoW();
    }

    function zoomFoW() {
      maskStageContainer.scale.x = map.getZoom();
      maskStageContainer.scale.y = map.getZoom();

      createOverlay();
      refreshFoW();
    }

    function resizeFoW() {

      createOverlay();
      refreshFoW();
    }

    function getFoWObjectArray(cb) {
      return objectsForFoW.map(object => cb(calculateCorrectCoordinates(object)));
    }

    function calculateCorrectCoordinates(object) {
      const coordinates = object.toGlobal(new PIXI.Point(0, 0));

      coordinates.x = Math.round(coordinates.x);
      coordinates.y = Math.round(coordinates.y);
      coordinates.anchor = object.anchor;
      coordinates.pivot = object.pivot;
      coordinates.scale = map.getZoom();

      return coordinates;
    }

    /** *************************************
    **************** PRIVATE ****************
    ****************************************/
    function resetFoW() {
      maskMovableContainer.children && maskMovableContainer.removeChildren();
      maskStageContainer.children && maskStageContainer.removeChildren();
      maskStageContainer.addChild(FoWOverlay);
      maskStageContainer.addChild(maskMovableContainer);
    }

    function createOverlay() {
      const coordinates = {
        x: -100,
        y: -100,
        width: mapRenderer.width + 200 + (mapRenderer.width / map.getZoom()),
        height: mapRenderer.height + 200 + (mapRenderer.height / map.getZoom()),
      };

      FoWOverlay.clear();
      FoWOverlay.beginFill(color);
      FoWOverlay.drawRect(coordinates.x, coordinates.y, coordinates.width, coordinates.height);
      FoWOverlay.endFill();
    }
    function setEvents() {
      mapEvents.subscribe('mapResized', resizeFoW);
      mapEvents.subscribe('mapZoomed', zoomFoW);
      mapEvents.subscribe('mapMoved', moveFoW);
    }
  }
}());
