//In a bidirectional association, both classes are aware of each other. Each class holds a reference to the other, enabling two-way communication.

//Example: A Team has a list of Developers, and each Developer knows which Team they belong to. Either side can navigate to the other.

class Developer {
    private team?: Team;

    setTeam(team: Team): void {
        this.team = team;
    }
}

class Team {
    private developers: Developer[] = [];

    addDeveloper(dev: Developer): void {
        this.developers.push(dev);
        dev.setTeam(this);
    }
}