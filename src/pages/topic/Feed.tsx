/**
 * Barra de navegación superior fija:
 * - Logo/ícono de Topinia (izquierda).
 * - Campo de búsqueda (centrado) para encontrar tópicos por palabra clave.
 * - Ícono para crear nuevo tópico (un botón “+” flotante también podría usarse en la esquina inferior derecha).
 * - Ícono de perfil (derecha) que lleva al perfil del usuario.
 * Feed principal:
 * - Lista de tópicos en orden cronológico o por relevancia.
 * - Cada “Card” de tópico mostrará:
 *    - Foto de perfil del autor, nombre/alias, tiempo desde la publicación.
 *    - Texto principal del tópico y, si aplica, una imagen o video embebido.
 *    - Un conjunto de opciones de opinión visualmente atractivas (iconos tipo emoji o encuestas rápidas).
 *    - Un contador de cuántos han respondido y un ícono del mapa para ver resultados.
 * Botón flotante "+":
 * - Al presionarlo, se abre la pantalla de creación de tópico.
 */
import Typography from "@mui/material/Typography";

export default function FeedPage() {
  return <Typography>Welcome to Topinia's Feed!</Typography>;
}
