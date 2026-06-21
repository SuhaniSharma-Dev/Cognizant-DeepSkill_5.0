public class FactoryMethodTest {
    public static void main(String[] args) {
        Document word = DocumentFactory.createDocument("word");
        Document pdf = DocumentFactory.createDocument("pdf");
        Document excel = DocumentFactory.createDocument("excel");
        word.open();
        pdf.open();
        excel.open();
    }
}
