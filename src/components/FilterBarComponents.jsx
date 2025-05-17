import { Button, ButtonGroup } from 'react-bootstrap';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const categories = [
    { id: "all", name: "Semua", icon: "bi-collection" },
    { id: "business", name: "Bisnis", icon: "bi-briefcase" },
    { id: "technology", name: "Teknologi", icon: "bi-laptop" },
    { id: "education", name: "Pendidikan", icon: "bi-book" },
    { id: "personal", name: "Personal", icon: "bi-person" }
  ];
  
  return (
    <div className="filter-bar p-2 rounded mb-4">
      <div className="d-flex flex-wrap justify-content-center">
        <ButtonGroup className="flex-wrap">
          {categories.map(category => (
            <Button 
              key={category.id}
              variant={activeFilter === category.id ? "primary" : "outline-primary"}
              className="m-1"
              onClick={() => onFilterChange(category.id)}
            >
              <i className={`bi ${category.icon} me-1`}></i>
              {category.name}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default FilterBar;