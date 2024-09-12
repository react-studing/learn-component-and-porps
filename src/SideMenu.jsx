import "./sideMenu.css";
import TagButton from "./TagButton";
import firsimg from "./assets/canli-mor-islak-lale-demeti-yapay-cicek-toptancilari-gala-demeti-yapay-cicek-deposu-2616-80-B.jpg";
import secondeimg from "./assets/WhatsApp Image 2024-09-11 at 09.35.49_13531b93.jpg";
export default function SideMenu() {
  const TagButtonTitles = ["جديدة", "الأكثر قراءة", "مقاللات مميزة"];
  return (
    <>
      <div className="side-menu">
        {TagButtonTitles.map(function (element, index) {
          return (
            <TagButton key={index} title={element}>
              {index === 0 ? <p>imogi 1</p> : <></>}
              {index === 1 ? (
                <img
                  src={firsimg}
                  alt="first-img"
                  width="50px"
                  height="50px"
                  style={{ borderRadius: "10px" }}
                />
              ) : (
                <></>
              )}
              {index === 2 ? (
                <>
                  <p>imogi 2</p>
                  <img
                    src={secondeimg}
                    alt="seconde-img"
                    width="50px"
                    height="50px"
                    style={{ borderRadius: "10px" }}
                  />
                </>
              ) : (
                <></>
              )}
            </TagButton>
          );
        })}
      </div>
    </>
  );
}
