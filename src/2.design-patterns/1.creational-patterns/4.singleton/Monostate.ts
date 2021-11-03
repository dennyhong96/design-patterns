// A monostate is a "conceptual singleton"
// - all data members of a monostate are static
// so all instances of the monostate use the same (static) data
export class Monostate {
  // Private static shared data (state), can't be accessed from outside
  private static totalLikes = 0;
  private static totalViews = 0;

  // Expose the shared state with getters/setters
  // each instance can read and update the shared state
  public get likes() {
    return Monostate.totalLikes;
  }
  public set likes(value: number) {
    Monostate.totalLikes = value;
  }

  public get views() {
    return Monostate.totalViews;
  }
  public set views(value: number) {
    Monostate.totalViews = value;
  }
}
