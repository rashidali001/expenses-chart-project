import data from  './data.json' assert { type: 'json'};

let graphs = document.querySelector('div.graphs');
let dates = document.querySelector('div.dates');
for (let i = 0; i < data.length; i++)
{
    let bar = document.createElement('div');
    bar.classList.add('bars');
    bar.style.height = data[i].amount+'%';
    graphs.appendChild(bar);
}

for (let i = 0; i < data.length; i++)
{
    let bar_dates = document.createElement('div');
    let bar_dates_text = document.createTextNode(data[i].day);
    bar_dates.appendChild(bar_dates_text);
    bar_dates.classList.add('bar-dates');
    dates.appendChild(bar_dates);
}