document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('demo1').src = `https://joeschmoe.io/api/v1/${document.getElementById('name').value}`
})