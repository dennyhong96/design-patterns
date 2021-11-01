import { Journal } from "./Journal";
import { PersistenceManager } from "./PersistenceManager";

const FILE_PATH = "src/SOLID/1.single-responsibility/_file.txt";

export async function SingleResponsibility() {
  const journal = new Journal();
  journal.addEntry("Today is a good day.");
  const entyIndex = journal.addEntry("I need to go to jym.");
  console.log(journal.toString());
  journal.removeEntry(entyIndex);
  console.log(journal.toString());

  const persistenceManager = new PersistenceManager();
  persistenceManager.saveToFile(journal, FILE_PATH);
  console.log(
    "Content from file: \n" + (await persistenceManager.readFromFile(FILE_PATH))
  );
}
