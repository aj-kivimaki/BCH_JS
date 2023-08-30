const calc = () => {
    const price = document.querySelector('#price').value;
    const money = document.querySelector('#money').value;
    const answer = document.querySelector('#answer');
    
    let text;

    const amount = (money / price).toFixed(2);
    
    amount > 10 ?
        text = `You could get ${amount} litres, good, you can escape now.` :
        text = `You could get ${amount} litres, ups, you have to stay here.`;

    answer.textContent = text;
}
