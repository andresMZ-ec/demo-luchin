import '../../assets/css/admin/components/Modal.css';

export function Modal(props) {
  const { topic, isOpen, closeModal, actions=[],children } = props;
  const viewModal = isOpen ? "active" : "";

  // const actions = [
  //   {
  //     name: "Agregar Promoción",
  //     type: "submit",
  //     className: "btn-modal yellow"
  //   }
  // ]

  const handleSubmit = ()=>{}
  const handleAccept = ()=>{}

  return (
    <div className={`class-overlay ${viewModal}`}>
      <div className="modal-reut">
        <div className="head-modal">
          <h1 className="title_card_cl">{topic}</h1>
          <button className="button-close-modal" onClick={closeModal}><i className="fal fa-times"></i></button>
        </div>
        <div className="details-modal-inf">{children}</div>
        <div className="actions-modals">
          { actions.map((button) => (
            <button key={button.name}
              className={button.className}
              onClick={()=>{
                switch (button.type){
                  case "submit":
                    closeModal();
                    handleSubmit();
                  break;
                  case "accept":
                    closeModal();
                    handleAccept();
                  break;
                  case "cancel":
                    closeModal();
                  break;
                  default: return "";
                }
              }}
            >{button.name}</button>
          )) }
        </div>
      </div>
    </div>
  );
}