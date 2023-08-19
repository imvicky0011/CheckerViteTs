import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import FilterNav from './FilterNav';

//defining the interface/modal of the Post Type
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Prop {
    setNotify: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListPage: React.FC<Prop> = ({ setNotify }) => {
  const navigate = useNavigate()

  //creating a state variable for the post 
  //to be stored when the page renders
  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    //validating if the user has entered the details
    const formData = localStorage.getItem('formData')
    if(!formData) {
        setNotify(true)
        navigate("/")
    }

    //if the user did not enter the details, then
    //they will be navigated back to the form filling page
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <Alert severity="success" style={{ margin: '20px', padding: '10px', backgroundColor: 'green', color: 'white', marginTop: '0px' }}>
        Second Page: First Task Succeeded! [Component 1]
      </Alert>
      <DataGrid rows={posts} columns={columns} />

      <Alert severity="success" style={{ margin: '20px', padding: '10px', backgroundColor: 'green', color: 'white', marginTop: '5px' }}>
        Second Page: Second Task Succeeded! [Component 2]
      </Alert>
      <FilterNav />

    </div>
  );
}

export default ListPage;
