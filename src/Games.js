import React from 'react';

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entier = entierAleatoire(1, 100);

function entierAleatoireB(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entierB = entierAleatoireB(1, 100);

class Games extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nom_a: "Perso_A",
            force_a: 0,
            vie_a: 100,
            nom_b: "Perso_B",
            force_b: 0,
            vie_b: 100,
            tour_joueur : 'a'
            
        }
        this.frapper = this.frapper.bind(this);
        this.dormir = this.dormir.bind(this);
        this.reset = this.reset.bind(this);

    }

    reset(){
        document.location.reload(true);
    }

    frapper(){
        if(this.state.tour_joueur === 'a'){
            this.setState(
                state => ({force_a: state.force_a +entier, vie_b: state.vie_b -entier, tour_joueur: 'b'})
            );
            
        }else{
            this.setState(
                state => ({force_b: state.force_b +entierB, vie_a: state.vie_a -entierB, tour_joueur: 'a'})
            );
        
        }
    
    }

    

    dormir(){
        if(this.state.tour_joueur === 'a'){
            this.setState(
                state => ({force_a: state.force_a -entier, vie_a: state.vie_a +entier, tour_joueur: 'b'})
            );
            
        }else{
            this.setState(
                state => ({force_b: state.force_b -entierB, vie_b: state.vie_b +entierB, tour_joueur: 'a'})
            );
        
        }
    }

    

    render(){

      

        
        if(this.state.tour_joueur === 'a'){
            var tour = "Tour : Joueur A"
            var classeA ="btn btn-primary w-100 mb-3 ";
            var classeB ="btn btn-primary w-100 mb-3 disabled";
            
        }else{
            var tour = "Tour : Joueur B"
            var classeA ="btn btn-primary w-100 mb-3 disabled";
            var classeB ="btn btn-primary w-100 mb-3";
        }

      


        if(this.state.vie_a <= 0){
            var classeA ="btn btn-primary w-100 mb-3 disabled";
            var classeB ="btn btn-primary w-100 mb-3 disabled";
            var gagne ="Le joueur B à gagner"
            var tour='';
            var elem = document.getElementById("carte_joueur");
            elem.parentNode.removeChild(elem)
        }

        if(this.state.vie_b <= 0){
            var classeA ="btn btn-primary w-100 mb-3 disabled";
            var classeB ="btn btn-primary w-100 mb-3 disabled";
            var gagne ="Le joueur A à gagner"
            var tour='';
            var elem = document.getElementById("carte_joueur");
            elem.parentNode.removeChild(elem)
        }

        if(this.state.vie_a > 50){
            var classeVieA ="progress-bar bg-success";
        }

        if(this.state.vie_a <= 50){
            var classeVieA ="progress-bar bg-warning";
        }

        if(this.state.vie_a < 40){
            var classeVieA ="progress-bar bg-danger";
        }

        if(this.state.vie_b > 50){
            var classeVieB ="progress-bar bg-success";
        }

        if(this.state.vie_b <= 50){
            var classeVieB ="progress-bar bg-warning";
        }

        if(this.state.vie_b < 40){
            var classeVieB ="progress-bar bg-danger";
        }


        const divStyleA = {
            width: this.state.vie_a+'%',
          };

          const divStyleB = {
            width: this.state.vie_b+'%',
          };

        return(
            <React.Fragment>
                <div class="col-12">
                    <h1 class="text-success">{gagne}</h1>
                    <h1>{tour}</h1>
                    <button onClick={this.reset}>Reset</button>
                </div>
<div id="carte_joueur" class="row mx-auto">
<div className="card col-6 mt-5">
        <img src="https://img4.wikia.nocookie.net/__cb20100718231010/streetfighter/images/2/28/Feilong-hdstance.gif" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{this.state.nom_a}</h5>
            <p className="card-text">
            <ul className="list-unstyled">
                <li>
                    <div className="progress">
                        <div className={classeVieA} role="progressbar" style={divStyleA} aria-valuenow={this.state.vie_a} aria-valuemin="0" aria-valuemax="100">{this.state.vie_a}%</div>
                    </div>
                </li>
                <li>
                    Force : {this.state.force_a} 
                </li>
                </ul>
            </p>
            <button className={classeA} onClick={this.frapper}>Frapper</button>
            <button className={classeA}  onClick={this.dormir}>Dormir</button>
        </div>
</div>

<div  className="card col-6 mt-5">
        <img src="https://i.pinimg.com/originals/9d/70/8c/9d708cddb3645f04d265bd02abeba318.gif" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{this.state.nom_b}</h5>
            <p className="card-text">
            <ul className="list-unstyled">
                <li>
                    <div className="progress">
                        <div className={classeVieB} role="progressbar" style={divStyleB} aria-valuenow={this.state.vie_b} aria-valuemin="0" aria-valuemax="100">{this.state.vie_b}%</div>
                    </div>
                </li>
                <li>
                    Force : {this.state.force_b} 
                </li>
                </ul>
            </p>
            <button className={classeB} onClick={this.frapper}>Frapper</button>
            <button className={classeB}  onClick={this.dormir}>Dormir</button>
        </div>
</div>
</div>
            </React.Fragment>
        )
    }
}


export default Games;