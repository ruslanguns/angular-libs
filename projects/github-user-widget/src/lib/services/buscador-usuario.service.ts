import { Injectable } from '@angular/core';

import * as api from 'api4github';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class BuscadorUsuarioService {

  obtenerDatosUsuario( usuario: string ): Promise<any> {
    return new Promise( function( resolve: any ) {
      api.getUserData( usuario ).then(
        (data: Usuario ) => {
          resolve(data);
        }
      ).catch( ( error: any ) => {
        resolve( error );
      });
    });
  }
}
