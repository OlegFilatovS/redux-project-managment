const initState = {
    projects: [
        {id:'1',title: 'First title', content: 'some content'},
        {id:'2',title: 'Second title', content: 'some content'},
        {id:'3',title: 'Third title', content: 'some content'},
    ]
};

const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
};

export default projectReducer;