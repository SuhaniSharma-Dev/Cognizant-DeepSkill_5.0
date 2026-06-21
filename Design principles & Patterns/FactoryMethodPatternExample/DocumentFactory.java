public class DocumentFactory {
    public static Document createDocument(String type) {
        switch (type.toLowerCase()) {
            case "word":
                return new WordDocument();
            case "pdf":
                return new PdfDocument();
            case "excel":
                return new ExcelDocument();
            default:
                throw new IllegalArgumentException("Invalid document type");
        }
    }
}