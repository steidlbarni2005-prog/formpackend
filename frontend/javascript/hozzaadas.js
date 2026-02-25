document.addEventListener('DOMContentLoaded', () => {


    document.getElementById('submitbutton').addEventListener('click', async (event) => {
  
        const formData = new FormData(document.querySelector('#uploadformkonyvek'));
       
        
        
        postMethodFetch('/api/konyv', formData)
            .then(response => {
                console.log('Sikeres POST kérés:', response);
                alert('Könyv sikeresen feltöltve!');
            })
            .catch(error => {
                console.error('Hiba a POST kérés során:', error);
                alert('Hiba történt a könyv feltöltése során.');
            });
        

    });

});
const postMethodFetch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await response.json();
    } catch (error) {
        console.error('Hiba a POST kérés során:', error);
        throw error;
    }
};