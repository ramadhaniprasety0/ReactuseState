import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimeDisplay from './components/TimeDisplayComponent';
import FilterBar from './components/FilterBarComponents';
import NoteForm from './components/NoteFormComponents';
import NoteCollection from './components/NoteCollectionComponents';

const App = () => {
  // State untuk menyimpan ide-ide
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      idea: "Aku harus bisa mandiri dengan berusaha sendiri",
      category: "business"
    },
    {
      id: 2,
      idea: "Aku harus mengumpulkan MODAL untuk Usaha Kopi Sop",
      category: "business"
    },
    {
      id: 3,
      idea: "Aku harus lebih giat belajar React agar bisa TAMAT in Celerates",
      category: "technology"
    },
    {
      id: 4,
      idea: "Aku harus LULUS kuliah tepat waktu agar tidak jadi DONATUR kampus !",
      category: "education"
    },
    {
      id: 5,
      idea: "Aku harus bisa mengatur waktu agar Tugas Celerates ku cepat selesai !",
      category: "personal"
    }
  ]);

  // State untuk filter kategori
  const [filter, setFilter] = useState("all");
  
  // State untuk menampilkan berapa lama sejak catatan terakhir ditambahkan
  const [lastAdded, setLastAdded] = useState(null);
  
  // Function untuk menambahkan ide baru
  const addIdea = (newIdea) => {
    const newIdeaObject = {
      id: ideas.length > 0 ? Math.max(...ideas.map(idea => idea.id)) + 1 : 1,
      idea: newIdea.idea,
      category: newIdea.category
    };
    
    setIdeas([...ideas, newIdeaObject]);
    setLastAdded(new Date());
  };
  
  return (
    <Container className="py-4">
      <header className="text-center mb-4">
        <h1 className="display-5 fw-bold">
          <i className="bi bi-clipboard-check me-2"></i>
          Collect Notes Dhani
        </h1>
        <p className="text-muted">Catatan untuk masa depan ku yang cerah dan ceria</p>
      </header>
      
      <TimeDisplay lastAdded={lastAdded} />
      
      <Row>
        <Col lg={8} className="mx-auto">
          <NoteForm onAddIdea={addIdea} />
          
          <FilterBar 
            activeFilter={filter} 
            onFilterChange={setFilter} 
          />
        </Col>
      </Row>
      
      <NoteCollection 
        ideas={ideas} 
        filter={filter} 
      />
    </Container>
  );
};

export default App;