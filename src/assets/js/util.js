import $ from "../../../node_modules/jquery/dist/jquery.slim";

/**
 * Dispose modal when ESC key pressed up
 */
export function disposeModalOnEscKeyPressed($modal) {
  $(window).keydown(function(e) {
    const keyCode = e.keyCode;
    if (keyCode == 27) {
      $modal.hide();
    }
  });
}
