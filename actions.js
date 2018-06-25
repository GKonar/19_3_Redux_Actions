import uuid from uuid;

// TYPY AKCJI

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT 'THUMB_DOWN_COMMENT';

// KREATORY AKCJI

function addComment(text) { // czy payload jest okay?
    return {
        type: ADD_COMMENT,
        payload: {
        	text: '1st comment',
        	}
        id: uuid.v4() // id komentarza
    }
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		payload: {
			text: 'edited comment',
		}
		id: id // id komentarza do edycji
	}
}

function deleteComment(id) {
	type: DELETE_COMMENT,
	id: id //id komentarza do usunięcia
}

function thumbUpComment(id) {
	type: THUMB_UP_COMMENT,
	payload: {
		function thumbUp();
	}
	id: id,
} 

function thumbDownComment(id) {
	type: THUMB_DOWN_COMMENT,
	payload: {
		function thumbDown();
	}
	id: id,
}

//ES 6

/*
const addComment = text => {
	return {
		type: ADD_COMMENT,
        payload: {
        	text: '1st comment',
        	}
        id: uuid.v4() // unikalne id komentarza
	}
}

const editComment = (text, id) => {
	return {
		type: EDIT_COMMENT,
		payload: {
			text: 'edited comment',s
		}
		id: id // id komentarza do edycji
	}
}

const deleteComment = id => {
	return {
		type: DELETE_COMMENT,
		id: id //id przekazane jako argument
	}
}

const thumbUpComment = id => {
	return {
		type: THUMB_UP_COMMENT,
		payload: {
			function thumbUp();
		},
		id: id //id przekazane jako argument
	}
}

const thumbDownComment = id => {
	return {
		type: THUMB_DOWN_COMMENT,
		payload: {
			function thumbUp();
		},
		id: id //id przekazane jako argument
	}
}

*/