import React, {Component} from 'react';
import Artykul from './Artykul/Artykul';
import Pracownik from './Pracownik/Pracownik';

class App extends Component{  
  render(){
    return(
        <div>
          <h1>Witamy w React</h1>
          <p>To jest moja pierwsza aplikacja React</p>
          <Artykul tytul="Brytyjski wywiad: Rosja realizuje strategię wyniszczenia" >
            Brytyjskie Ministerstwo Obrony zaktualizowało dane wywiadowcze dotyczące wojny Rosji z Ukrainą. 
          </Artykul>
          <Artykul tytul="Artykul2" >To jest treść artykulu 2</Artykul>
          <Artykul tytul="Artykul3" >To jest treść artykulu 3</Artykul>          

          <Pracownik nazwisko="Kowalski" imie="Jan" stanowisko="spawacz">
            Sumienny, rzetelny bardzo koleżeński, pomaga młodszym pracownikom podnosić kulturę spawania
          </Pracownik>

          <Pracownik nazwisko="Nowak" imie="Zenon" stanowisko="tokarz">
            Wydajny, pracowity, prawie wcale nie pije i wtedy wyroby są prawie idealne
          </Pracownik>
        </div>
    );    
  }
}

export default App;