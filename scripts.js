async function loadNotes() {
    const listElement = document.querySelector('#note-list');
    const emptyMessage = document.querySelector('#empty-message');

    try {
        const response = await fetch('notes/list.json?_=' + Date.now());
        if (!response.ok) throw new Error('failed to fetch');

        const notes = await response.json();
        if (!Array.isArray(notes) || notes.length === 0) {
            emptyMessage.hidden = false;
            return;
        }

        notes.forEach(note => {
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = `notes/${note.path}`;

            const meta = document.createElement('div');
            meta.className = 'note-meta';
            meta.innerHTML = `<span>${note.date}</span><span>${note.title ?? ''}</span>`;

            const title = document.createElement('div');
            title.className = 'note-title';
            title.textContent = note.title || note.date;

            const description = document.createElement('p');
            description.className = 'note-description';
            description.textContent = note.summary || '';

            link.appendChild(meta);
            link.appendChild(title);
            if (note.summary) {
                link.appendChild(description);
            }
            item.appendChild(link);
            listElement.appendChild(item);
        });
    } catch (error) {
        emptyMessage.hidden = false;
        emptyMessage.textContent = '노트 목록을 불러오지 못했습니다. list.json을 확인해 주세요.';
    }
}

loadNotes();
