const database = require( './db.js' );

const store = {
	add: ( key, value ) => {
		return new Promise( ( resolve, reject ) => {
			database.get().then( function ( data ) {
				let newData = Object.assign( {}, data, { [ key ]: value } );

				return database.write( newData ).then( resolve ).catch( reject );
			} ).catch( reject );
		} );
	},
	get: ( key ) => {
		return new Promise( ( resolve, reject ) => {
			database.get().then( ( data ) => {
				if ( data && data[ key ] ) {
					resolve( data[ key ] );
				} else {
					reject( 'No data found for ' + key );
				}
			} ).catch( ( e ) => {
				reject( 'Failed to get value for ' + key + ', ', e );
			} );
		} );
	},
	remove: ( key ) => {
		return new Promise( ( resolve, reject ) => {
			database.get().then( ( res ) => {
				let newData = res;

				delete newData[ key ];

				return database.write( newData ).then( resolve ).catch( reject );
			} ).catch( reject );
		} );
	},
	list: () => {
		return new Promise( ( resolve, reject ) => {
			database.get().then( ( res ) => {
				resolve( res );
			} ).catch( reject );
		} );
	}
};

module.exports = store;