public abstract class Document {
    public abstract void open();
}
class WordDocument extends Document {
    @Override
    public void open() {
        System.out.println("Opening Word Document");
    }
}
class PdfDocument extends Document {
    @Override
    public void open() {
        System.out.println("Opening PDF Document");
    }
}
class ExcelDocument extends Document {
    @Override
    public void open() {
        System.out.println("Opening Excel Document");
    }
}
