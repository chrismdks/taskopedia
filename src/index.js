import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Footer from './Footer';
import Student from './Student';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody(){
  const topic = "React JS"; //types of variables: const, let, var
  const totalLectures = 3;
  return(
    <div>
      <p>In this course, we will learn {topic} by building TaskOPedia!<br/>
      Total Lectures - {totalLectures}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional & Class Components</li>
      </ul>
    </div>
  )
}

root.render(
  <div className='container'>
    <Header />
    <MainBody />
    <span>Students Enrolled:</span>
    <Student name="Chrisanthi Mihelioudakis" xp={2} />
    <Student name="Michael Tsougranis" xp={7}/>
    <Footer />
  </div>
);
