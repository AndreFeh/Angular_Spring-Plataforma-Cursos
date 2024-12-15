import { Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';

// AGORA AQUI QUE DECLARA AS ROTAS
	// DE´POS DE DECLARADOS, CHAMAR DENTRO DE "serverRoutes"
	/**
	 * path: 'content',
	 * renderMode: RenderMode.Prerender // Ou o modo de renderização que você deseja
	 */
export const routes:Routes=[{
}
]

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
