const table = document.querySelector('table');

table.addEventListener('click', function(event) {
    if (event.target.tagName !== 'TD') return;

    const cell = event.target;
    const cellText = cell.textContent;

    const textarea = document.createElement('textarea');
    textarea.value = cellText;
    textarea.style.width = cell.offsetWidth + 'px';
    textarea.style.height = cell.offsetHeight + 'px';

    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.addEventListener('click', function() {
        cell.textContent = textarea.value;
        cell.removeAttribute('contenteditable');
        textarea.remove();
        okButton.remove();
        cancelButton.remove();
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', function() {
        cell.textContent = cellText;
        cell.removeAttribute('contenteditable');
        textarea.remove();
        okButton.remove();
        cancelButton.remove();
    });

    cell.appendChild(textarea);
    cell.appendChild(okButton);
    cell.appendChild(cancelButton);

    cell.setAttribute('contenteditable', true);

    cell.style.resize = 'none';
});