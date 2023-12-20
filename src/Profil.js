import { getImageUrl } from "./utils";
// Passer des accessoires à un composant
// Étape 1 : transmettre les accessoires au composant enfant
// import Avatar from "./Avatar";
function Avatar({ person, size }) {
    return (
        <img
          className="avatar"
          src={getImageUrl(person)}
          alt={person.name}
          width={size}
          height={size}
        />
      );
    }

export default function Profile() {
    return (
      <Avatar 
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}/>
    );
  }