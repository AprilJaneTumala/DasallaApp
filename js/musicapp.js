"use strict";

class MusicApp{
	constructor(){
		this.musics = [
			{
				"Band":"Paramore",
        		"Song":"Last Hope",
        		"Lyrics":"Timothy Van Patten",
        		"Poster":"C:/Users/Administrator/Documents/MusicApp/img/paramore.jpg",
			},
			{
				"Band":"Blink 182",
        		"Song":"Sober",
        		"Lyrics":"I know I messed up and it might be overBut let me call you when I'm soberI'm a dandelion, you're a four-leaf cloverBut let me call you when I'm sobere",
        		"Poster":"C:/Users/Administrator/Documents/MusicApp/img/blink182.jpg",
			},
			{
				"Band":"Our Last Night",
        		"Song":"Diamonds",
        		"Lyrics":"Timothy Van Patten",
        		"Poster":"C:/Users/Administrator/Documents/MusicApp/img/ourlastnight.jpg",
			},
			{
				"Band":"Chris Brown",
        		"Song":"Forever",
        		"Lyrics":"Timothy Van Patten",
        		"Poster":"C:/Users/Administrator/Documents/MusicApp/img/chrisbrown.jpg",
			},
			{
				"Band":"Coldplay",
        		"Song":"Fix You",
        		"Lyrics":"Timothy Van Patten",
        		"Poster":"C:/Users/Administrator/Documents/MusicApp/img/chrisbrown.jpg",
			},
			{
				"Band":"Zedd",
        		"Song":"Beautiful Now",
        		"Lyrics":"Timothy Van Patten",
        		"Poster":"C:/Users/Administrator/Documents/MusicApp/img/chrisbrown.jpg",
			},
			{
				"Band":"Alan Walker",
        		"Song":"Faedd",
        		"Lyrics":"Timothy Van Patten",
        		"Poster":"C:/Users/Administrator/Documents/MusicApp/img/chrisbrown.jpg",
			}




		];
	}
	render(html, component){
		/* Override */
		component.innerHTML += html;
	}
	reRender(html, component){
		/* Append */
		component.innerHTML = html;
	}
	createMusic(){
		let b = document.getElementById('newBand');
    	let s = document.getElementById('newSong');
    	let l = document.getElementById('newLyrics');
    	let p = document.getElementById('newPoster');
    	

    	let music = {"Band":b.value,"Song":s.value,"Lyrics":l.value,"Poster":p.value};
    	this.musics.push(music);

    	b.value = s.value = l.value = p.value = ''; //Clear Fields
    	this.musicListInfo();

		
	}
	deleteMusic(key){	
	let table = document.getElementById('musicListInfo');
    table.deleteRow(key);
    this.music.splice(key,1);

    // let m = this.movies;
    // let dummy = [];
    // for(let i=0;i<m;i++){
    //  if(key!=i){
    //    dummy.push(m[i]);
    //  }
    // }
    // this.movies = dummy;
    let details = document.getElementById('musicDetails');
    details.innerHTML = "";
    this.musicListInfo();   	
		
	}
	updateMusic(key){
	let s = document.getElementById('updateSong');
    let l = document.getElementById('updateLyrics');
    

    let m = this.musics[key];
    let music = {"Band":m.Title,"Song":s.value,"Lyrics":l.value,"Poster":m.Poster};

    this.musics[key] = music;
    let details = document.getElementById('musicDetails');
    details.innerHTML = "";
    this.musicListInfo();     
			
	}
}

class Component extends MusicApp{
	constructor(){
		/* call parent constructor*/
		super();
	}
	musicBody(){
		this.render(
			`
			<!-- Navbar (sit on top) -->
	<div class="w3-top">
  		<ul class="w3-navbar w3-white w3-wide w3-padding-8 w3-card-2">
    	<li>
      <a href="musicapp.html" class="w3-margin-left"><b>LA</b>Musique</a>
    	</li>
    <!-- Float links to the right. Hide them on small screens -->
    	<li class="w3-right w3-hide-small">
      		<a href="music.html" class="w3-left">Music</a>
      		<a href="#about" class="w3-left">Music List</a>
      		<a href="#contact" class="w3-left w3-margin-right">Contact</a>
    	</li>
  		</ul>
	</div>

			<!-- Header -->
	<header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
  		<img class="w3-image" src="img/maincover.jpg" alt="maincover" width="1500" height="800">
  		<div class="w3-display-middle w3-margin-top w3-center">
    	<h1 class="w3-xxlarge"><span class="w3-border w3-border-black w3-padding"><b>LA</b></span> <span class="w3-hide-small">Musique</span></h1>
  		</div>
	</header>

	<!-- Page content -->
<div class="w3-content w3-padding" style="max-width:1564px">

<div class="w3-row-padding w3-grayscale">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src="img/paramore.jpg" alt="paramore" style="width:100%">
      <h3>Paramore</h3>
      <p class="w3-opacity">"Last Hope"</p>
      <p>"It's just a spark but it's enough to keep me going and when it's dark out, no one's around it keeps glowing"</p>
      <p><button class="w3-btn-block">Lyrics</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src="img/blink182.jpg" alt="blink182" style="width:100%">
      <h3>Blink 182</h3>
      <p class="w3-opacity">"Sober"</p>
      <p>"I know I messed up and it might be over but let me call you when I'm sober I'm a dandelion"</p>
      <p><button class="w3-btn-block">Lyrics</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src="img/ourlastnight.jpg" alt="OLN" style="width:100%">
      <h3>Our Last Night</h3>
      <p class="w3-opacity">"Diamond"</p>
      <p>"Like diamonds, like diamonds in the rough we're shining, we're shining through the mud soon enough we'll see
      "</p>
      <p><button class="w3-btn-block">Lyrics</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src="img/chrisbrown.jpg" alt="chrisbrown" style="width:100%">
      <h3>Chris Brown</h3>
      <p class="w3-opacity">"Forever"</p>
      <p>"It's like I waited my whole life for this one night it's gon' be me you and the dance floor cause we only got one night double your pressure"</p>
      <p><button class="w3-btn-block">Lyrics</button></p>
    </div>
  </div>

			`
			,document.getElementById('main'));
	}

	musicList(){
    this.render(
      `
  		
      <div class="w3-row-padding w3-grayscale">
   		 <div class="w3-col 16 m6 w3-margin-bottom">
            <h1>Music List</h1>
            <table id="musicList" class="table">
              <thead>
                <tr>
                  <th>Artist</th>
                  <th>Song</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="musicListInfo"></tbody>
            </table>
          </div>
        <hr/>
       		<div class="w3-col 16 m6 w3-margin-bottom" id="musicDetails">
       		</div>
          </div>
        <div class = "w3-container">
       		<div class = "w3-row">
            <div class = "w3-col-sm-12" id="musicCreate">
            </div>
            </div>
            </div>

          
      `
      ,document.getElementById('main'));
    this.musicListInfo();
  }
	musicListInfo(){
		let html = "";
		let m = this.musics;
		for(let i=0;i<m.length;i++){
			html += `
				<tr>
					<td>${m[i].Band}</td>
					<td>${m[i].Song}</td>
					<td><button class="w3-btn-block"  onclick="component.musicDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('musicListInfo'));
	}
	musicDetails(key){
		this.reRender(
			`
				<h1>Music Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.musics[key].Poster}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="musicsDetailsInfo">
				        <h4 class="media-heading">${this.musics[key].Band}</h4>
				        Song: ${this.musics[key].Song}<br/>
						Lyrics: ${this.musics[key].Lyrics}<br/>
						<button class="w3-btn-block" onclick="component.musicUpdate(${key})">Update</button>
						<button class="w3-btn-block" onclick="component.musicMovie(${key})">Delete</button>
					</div>	
				</div>			
			`,document.getElementById('musicDetails'));
	}
	musicCreate(){
		this.render(
			`
				<h1>Music Create</h1>
				Artist: <input class="form-control" id="newBand" type="" placeholder="Enter Band" /><br/>
				Song: <input class="form-control" id="newSong" type="" placeholder="Enter Song" /><br/>
				Lyrics: <input class="form-control" id="newLyrics" type="" placeholder="Enter Lyrics" /><br/>
				Poster: <input class="form-control" id="newPoster" type="" placeholder="Enter Poster" /><br/>
				<button class="btn btn-primary" onclick="component.createMusic()">Create</button>
			`,document.getElementById('musicCreate'));
	}
	musicUpdate(key){
		this.reRender(
			`
					<h4 class="media-heading">${this.musics[key].Band}</h4>
			        Song: <input id="updateSong" type="text" value="${this.musics[key].Song}" /><br/>
					Lyrics: <input id="updateLyrics" type="text" value="${this.musics[key].Lyrics}" /><br/>
					<button class="btn btn-success" onclick="component.updateMusic(${key})">Save</button>
			`,document.getElementById('musicDetailsInfo'));
	}
	musicFooter(){
		this.render(
			`
			<!-- Footer -->
<footer class="w3-center w3-black w3-padding-16">
  <p>La Musique</p>
</footer>

			`
			,document.getElementById('main'));
	}
}

let component = new Component();
component.musicBody();
component.musicList();
/*component.musicCreate();*/
component.musicFooter();