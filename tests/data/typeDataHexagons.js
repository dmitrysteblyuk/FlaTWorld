'use strict';

window.typeData = {
    terrainBase:[{
        image:'desert',
        attachedToTerrains:['0'],
        propability:'100%',
        name: 'forDebugging - desert',
        minimapColor: 0xe9d9b5
      },{
        image:'grass',
        attachedToTerrains:['0'],
        propability:'100%',
        name: 'forDebugging - grass',
        minimapColor: 0x24b160
      },{
        image:'wasteland',
        attachedToTerrains:['0'],
        propability:'100%',
        name: 'forDebugging - wasteland',
        minimapColor: 0x24b160
      },{
        image:'tundra',
        attachedToTerrains:['0'],
        propability:'100%',
        name: 'forDebugging - tundra',
        minimapColor: 0x24b160
      },{
        image:'lake',
        attachedToTerrains:['0'],
        propability:'100%',
        name: 'forDebugging - lake',
        minimapColor: 0x24b160
      },{
        image:'mountains',
        attachedToTerrains:['0'],
        propability:'100%',
        name: 'forDebugging - mountains',
        minimapColor: 0x24b160
      },{
        image:'forest',
        attachedToTerrains:['0'],
        propability:'100%',
        name: 'forDebugging - forest',
        minimapColor: 0x24b160
      }],
    terrain:[{
      name:'desert',
      image:'0',
      desc:'very dry land',
      modifiers: {
        City: {
          _player_: [{
            from:'thisOnePlace',
            modifiers: {
              production:'Provides +1 food for cities'
            }
          }]
        }
      }
    }],
    unit:[{
      name:'anti-tank',
      desc:'Vrooom...',
      image:'tank.png',
      att:'Good',
      def:'Poor',
      siege:'Decent',
      initiate:'90',
      move:'100',
      morale:'Average',
      vision:'150',
      influenceArea:'30'
    },{
    name:'tank',
    desc:'Whistlers',
    image:'antitank.png',
    att:'1',
    def:'2',
    siege:'2',
    initiate:'110',
    move:'100',
    morale:'Average',
    vision:'250',
    influenceArea:'30',
    modifiers:{
    unit:{
    _enemy_:[{
    from:'thisOnePlace',
						modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'cruiser',
				desc:'liplap',
				image:'cruiser.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'bomber',
				desc:'badabooom',
				image:'bomber.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'oldCannon',
				desc:'wiuuuuu',
				image:'mortar.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'camel',
				desc:'wiuuuuu',
				image:'camel.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'carrier',
				desc:'wiuuuuu',
				image:'carrier.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'catapult',
				desc:'wiuuuuu',
				image:'catapult.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'missile',
				desc:'wiuuuuu',
				image:'missile.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'phalanx',
				desc:'wiuuuuu',
				image:'phalanx.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'soldier',
				desc:'wiuuuuu',
				image:'soldier.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'sailboat',
				desc:'wiuuuuu',
				image:'sailboat.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'wagon',
				desc:'wiuuuuu',
				image:'wagon.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'submarine',
				desc:'wiuuuuu',
				image:'submarine.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'freighter',
				desc:'wiuuuuu',
				image:'freighter.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'vikingboat',
				desc:'wiuuuuu',
				image:'vikingboat.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'marine',
				desc:'wiuuuuu',
				image:'marine.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'dude',
				desc:'wiuuuuu',
				image:'dude.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'tractor',
				desc:'wiuuuuu',
				image:'tractor.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'cannon',
				desc:'wiuuuuu',
				image:'cannon.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'helicopter',
				desc:'wiuuuuu',
				image:'helicopter.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'arctic',
				desc:'wiuuuuu',
				image:'arctic.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'stealth',
				desc:'wiuuuuu',
				image:'stealth.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'jet',
				desc:'wiuuuuu',
				image:'jet.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'battleship',
				desc:'wiuuuuu',
				image:'battleship.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'finnishSoldier',
				desc:'wiuuuuu',
				image:'some.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'airplane',
				desc:'wiuuuuu',
				image:'airplane.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'frigate',
				desc:'wiuuuuu',
				image:'frigate.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'steamboat',
				desc:'wiuuuuu',
				image:'steamboat.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'knight',
				desc:'wiuuuuu',
				image:'knight.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'legionaire',
				desc:'wiuuuuu',
				image:'legionaire.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'apc',
				desc:'wiuuuuu',
				image:'apc.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'missile2',
				desc:'wiuuuuu',
				image:'missile2.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'corvette',
				desc:'wiuuuuu',
				image:'corvette.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'horsey',
				desc:'wiuuuuu',
				image:'horsey.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'donkeyPioneer?',
				desc:'wiuuuuu',
				image:'donkeyPioneer.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'truck',
				desc:'wiuuuuu',
				image:'truck.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'superboat',
				desc:'wiuuuuu',
				image:'superboat.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'greenninja',
				desc:'wiuuuuu',
				image:'greenninja.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'pikeman',
				desc:'wiuuuuu',
				image:'pikeman.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'nomad',
				desc:'wiuuuuu',
				image:'nomad.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'joustingKnight',
				desc:'wiuuuuu',
				image:'knight2.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'priest',
				desc:'wiuuuuu',
				image:'priest.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'awacs',
				desc:'wiuuuuu',
				image:'awacs.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'oldman?',
				desc:'wiuuuuu',
				image:'oldman.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'king',
				desc:'wiuuuuu',
				image:'king.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'blackDude?',
				desc:'wiuuuuu',
				image:'blackie.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'ranger',
				desc:'wiuuuuu',
				image:'ranger.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'reddie',
				desc:'wiuuuuu',
				image:'reddie.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'charriot',
				desc:'wiuuuuu',
				image:'charriot.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'floatingfort',
				desc:'wiuuuuu',
				image:'floatingfort.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'airborne',
				desc:'wiuuuuu',
				image:'airborne.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'elephant',
				desc:'wiuuuuu',
				image:'elephant.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'archer',
				desc:'wiuuuuu',
				image:'archer.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'shieldRider',
				desc:'wiuuuuu',
				image:'rider.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}},{
				name:'crusader',
				desc:'wiuuuuu',
				image:'crusader.png',
				att:'1',
				def:'2',
				siege:'2',
				initiate:'110',
				move:'100',
				morale:'Average',
				vision:'250',
				influenceArea:'30',
				modifiers:{
					unit:{
						_enemy_:[{
							from:'thisOnePlace',
							modifiers:{
  morale:'suffers morale drop'
			}}]}}}
		],
    places: [{
      name: 'Shanghai',
      image:'city.png'
    }]
};