document.getElementById('spinButton').addEventListener('click', function() {
    document.getElementById('spinButton').disabled = true;
    
    const movie1 = document.getElementById('movie1').value;
    const movie2 = document.getElementById('movie2').value;
    const movie3 = document.getElementById('movie3').value;
    const movie4 = document.getElementById('movie4').value;

    const movies = [movie1, movie2, movie3, movie4];

    // Aggiungi i titoli dei film ai segmenti della ruota
    document.getElementById('segment1').innerText = movie1;
    document.getElementById('segment2').innerText = movie2;
    document.getElementById('segment3').innerText = movie3;
    document.getElementById('segment4').innerText = movie4;

    const selectedMovie = movies[Math.floor(Math.random() * movies.length)];

    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 1800) + 720; // Aggiunge almeno 2 giri completi
    wheel.style.transform = `rotate(${randomDegree}deg)`;
    wheel.style.transition = 'transform 12s ease-out';
    
    /*
    setTimeout(() => {
        document.getElementById('result').innerText = `Hai scelto: ${selectedMovie}`;
    }, 12000); // 12 secondi per l'animazione
    */
});