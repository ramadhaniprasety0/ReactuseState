import { Card, Badge, Col } from 'react-bootstrap';

const NoteCard = ({ idea }) => {
  // Mapping kategori ke style
  const categoryStyles = {
    business: {
      borderColor: "#0d6efd",
      badgeVariant: "primary",
      icon: "bi-briefcase"
    },
    technology: {
      borderColor: "#dc3545",
      badgeVariant: "danger",
      icon: "bi-laptop"
    },
    education: {
      borderColor: "#198754",
      badgeVariant: "success",
      icon: "bi-book"
    },
    personal: {
      borderColor: "#6c757d",
      badgeVariant: "secondary",
      icon: "bi-person"
    }
  };
  
  const style = categoryStyles[idea.category];
  const textColor = "black";
  
  // Data Kategori
  const categoryLabel = {
    business: "Bisnis",
    technology: "Teknologi",
    education: "Pendidikan",
    personal: "Personal"
  }[idea.category];
  
  return (
    <Col md={4} className="mb-3">
      <Card 
        className="h-100 shadow-sm note-card"
        style={{ 
          borderLeft: `5px solid ${style.borderColor}`,
          transition: "transform 0.3s, box-shadow 0.3s"
        }}
      >
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Badge 
              bg={style.badgeVariant} 
              className="py-2 px-3"
            >
              <i className={`bi ${style.icon} me-1`}></i>
              {categoryLabel}
            </Badge>
            <small className="text-muted note-id">ID: {idea.id}</small>
          </div>
          
          <Card.Text className="mt-3" style={{ color: textColor }}>
            {idea.idea}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NoteCard;