document.getElementById('addRecommendationBtn').addEventListener('click', function () {
    var recommendation = document.getElementById('recommendationInput').value;
    if (recommendation) {
        var recommendationsList = document.querySelector('.recommendations-list');
        var newRecommendation = document.createElement('p');
        newRecommendation.textContent = recommendation;
        recommendationsList.appendChild(newRecommendation);

        var popup = document.getElementById('popup');
        popup.style.display = 'block';

        document.getElementById('recommendationInput').value = '';
    }
});

document.getElementById('closePopup').addEventListener('click', function () {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
});