class Vote {
    constructor() { }

    getState() {
        var stateRef = database.ref("voteState");
        stateRef.on("value", (data) => {
            voteState = data.val();
        });
    }

    updateState(state) {
        database.ref("/").update({
            voteState: state
        })
    }
}