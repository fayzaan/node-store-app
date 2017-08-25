const store = require( './store.js' );

let router = {
	route: function ( args ) {
		let req = args.slice( 2 );
		let path = req[ 0 ];
		let params = args.slice( 3 );

		if ( path && this[ path ] ) {
			this[ path ]( ...params );
		} else {
			console.error( 'command does not exist' );
		}
	},
	add: function ( key, value ) {	
		store.add( key, value ).then( () => {
			console.log( 'Added new value' );
		} ).catch( ( e ) => {
			console.error( 'Failed to add new value', e );
		} );
	},
	list: function () {
		store.list().then( ( res ) => {
			console.log( res );
		} ).catch( ( e ) => {
			console.error( 'Failed to retrieve data from database, ', e );
		} )
	},
	get: function ( key ) {
		store.get( key ).then( ( res ) => {
			console.log( res );
		} ).catch( ( e ) => {
			console.error( 'Failed to retrieve value for key from database, ', e );
		} );
	},
	remove: function ( key ) {
		store.remove( key ).then( () => {
			console.log( 'Key/Value removed' );
		} ).catch( ( e ) => {
			console.error( 'Failed to remove key/value, ', e );
		} );
	}
};

module.exports = router;