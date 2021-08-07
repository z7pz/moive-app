class API {
    constructor() {
        this.baseurl = 'https://api.themoviedb.org/3/';
        this.generalurl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8';
        const generalurl = this.generalurl;
        document.addEventListener('DOMContentLoaded', async function() {
            const data = await fetch(generalurl).then(c => c.json())
            console.log(data.results)
            const container = document.createElement('div')
            container.className='container';
            data.results.sort((a,b) => b.vote_average - a.vote_average)
            for (let i = 0; i < data.results.length; i++) {
                const wuwData = data.results[i];
                var div = document.createElement('div');
                div.className = 'card';            
                var img = document.createElement('img');
                img.src = "https://image.tmdb.org/t/p/w500"+ wuwData.poster_path 
                var titleDiv = document.createElement('div');
                titleDiv.textContent = wuwData.original_title;
                titleDiv.className = 'title'
                var descriptionDiv = document.createElement('div');
                descriptionDiv.textContent = wuwData.overview
                descriptionDiv.className = 'description'
                var RateParagraph = document.createElement('div');
                RateParagraph.className = "rate-p"
                RateParagraph.textContent = wuwData.vote_average 
                div.appendChild(img)
                div.appendChild(titleDiv)
                div.appendChild(RateParagraph)
                container.appendChild(div);
            }
            document.body.appendChild(container)
        }, false);
    }
}

 new API()

 //https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=badboys