import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
    
    /* 
        Modification de l'opérateur logique afin de classer les 
        images du plus récent au plus ancien, soit dans un ordre décroissant.
    */
    const byDateDesc = data?.focus.sort((evtA, evtB) =>
      // new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
      new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
    );
    
    const nextCard = () => {
      // setTimeout(
      //   () => setIndex(index < byDateDesc.length ? index + 1 : 0),
      //   5000
      // );
        /*
            Exclure l'élément "undefined" en incrémentant l'indice de 1
            Introduire le point d'interrogation "?" pour vérifier l'existence de byDateDesc
        */
      setTimeout(
        () => setIndex(index + 1 < byDateDesc?.length ? index + 1 : 0),
        5000
      );
    };
  
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // <>
        /*
          Changeemnt <></> en div key pour avoir une clef unique
        */ 
        <div key={event.date}>
            <div
              key={event.title}
              className={`SlideCard SlideCard--${
                index === idx ? "display" : "hide"
              }`}
            >
            {/* Attribut alt modifié pour accéder au titre de l'image */}
            {/* <img src={event.cover} alt="forum" /> */}
            <img src={event.cover} alt={event.title} />

              <div className="SlideCard__descriptionContainer">
                <div className="SlideCard__description">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div>{getMonth(new Date(event.date))}</div>
                </div>
              </div>
            </div>
            <div className="SlideCard__paginationContainer">
              <div className="SlideCard__pagination">
                {byDateDesc.map((_, radioIdx) => (
                  <input
                    // Changement de la key pour qu'elle soit unique, / pas d'id dans le json donc on utilise la date
                    key={_.date}
                    type="radio"
                    name="radio-button"
                    /*
                      Changement de idx par index pour indiquer sur quelle image on se trouve , pour éviter de prendre l'index de la map parent
                    */
                      checked={index === radioIdx}
                   />
                  // <input
                  //   key={`${event.id}`}
                  //   type="radio"
                  //   name="radio-button"
                  //   checked={idx === radioIdx}
                  // />

                ))}
              </div>
            </div>
        </div>
        // </>
      ))}
    </div>
  );
};

export default Slider;
