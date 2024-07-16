import {Col12, Col20} from "@components/atomic/rowAndColumns/Col.tsx";
import {Row12} from "@components/atomic/rowAndColumns/Row.tsx";

function ReportChat() {
  return (
    <Col12 width="100%">
      <Col20 width="100%" border="2px solid var(--gray600)" borderBottom="2px solid var(--gray600)" padding="20px" borderRadius={12}>
        {/*chatboxs*/}
      </Col20>
      <Row12 width="100%" justifyContent="end">
        <span className="text-m-16" style={{color: "var(--gray800)"}}>발음</span>
        <span className="text-m-16" style={{color: "var(--gray800)"}}>문법</span>
      </Row12>
    </Col12>
  );
}

export default ReportChat;
