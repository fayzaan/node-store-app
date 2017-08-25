const fs = require( 'fs' );

const database = {
	get: () => {
		return new Promise( ( resolve, reject ) => {
			fs.readFile( './db/db.json', {}, ( err, data ) => {
				if ( err ) { reject( err ); }

				if ( data ) {
					try {
						resolve( JSON.parse( data ) );
					} catch ( e ) {
						reject( e );
					}
				} else {
					reject( 'Error, no data found' );
				}
			} );
		} );
	},
	write: ( data ) => {
		return new Promise( ( resolve, reject ) => {
			try {
				data = JSON.stringify( data );

				fs.writeFile( './db/db.json', data, ( err ) => {
					if ( err ) { reject( err ); }

					resolve();
				} );
			} catch ( e ) {
				reject( 'Failed to write to DB, ', e );
			}
		} );
	}
};

module.exports = database;