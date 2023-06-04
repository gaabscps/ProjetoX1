import { EmptyImage } from "@/assets/svg/EmptyImage";

export function ModalLoginBody() {
  return (
    <div className="d-flex flex-column align-items-center w-100 h-100">
      <EmptyImage className="modal-logo" />
      <h5 className="h5-500 h5-modal-margin h5-modal">Entre com a sua conta</h5>
    </div>
  );
}
