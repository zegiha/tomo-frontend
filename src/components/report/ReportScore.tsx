import {Col8} from "@components/atomic/rowAndColumns/Col.tsx";
import {Row0} from "@components/atomic/rowAndColumns/Row.tsx";
import {reportScoreStyle} from "@styles/index";


function DetailScoreCircle({title, scorePercentage}: {title: string, scorePercentage: number}) {
  return (
    <Col8 alignItems="center">
      <div style={{position: "relative"}}>
        <Row0
          width="80px"
          height="80px"
          justifyContent="center"
          alignItems="center"
          backgroundColor="var(--gray500)"
          borderRadius={40}
        >
          <svg
            className={reportScoreStyle.scoreCircle}
            style={{strokeDashoffset: 100 - scorePercentage}}
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="#232323"
              strokeWidth="8"
              fill="none"
              pathLength={100}
            />
          </svg>
          <span className="text-s-24">{scorePercentage}</span>
        </Row0>
      </div>
      <span className="text-m-20">{title}</span>
    </Col8>
  );
}


function AllScoreCircle({scorePercentage}: { scorePercentage: number }) {
  return (
    <Col8 alignItems="center">
      <div style={{position: "relative"}}>
        <Row0
          width="100px"
          height="100px"
          justifyContent="center"
          alignItems="center"
          backgroundColor="var(--gray500)"
          borderRadius={100}
        >
          <svg
            className={reportScoreStyle.scoreCircle}
            style={{strokeDashoffset: 100 - scorePercentage}}
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none">
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#232323"
              strokeWidth="8"
              fill="none"
              pathLength={100}
            />
          </svg>
          <span className="text-s-24">{scorePercentage}</span>
        </Row0>
      </div>
      <span className="text-m-20">전체 점수</span>
    </Col8>
  );
}

interface ReportScoreProps {
  allScore: number,
  subScore: {
    accuracy: number,
    completeness: number,
    fluency: number,
  }
}

function ReportScore({allScore, subScore}: ReportScoreProps) {
  const getDetailScoreTitle = (type: string) => {
    if(type === "accuracy") return "유창성";
    else if(type === "completeness") return "정확도";
    else if(type === "fluency") return "발음 비율";
    else return "error";
  }

  return (
    <Col8 alignItems="center" width="100%">
      <Row0 alignItems="center" width="100%">
        <AllScoreCircle scorePercentage={allScore}/>
        <Row0 width="100%" justifyContent="space-evenly">
          {Object.entries(subScore).map(([key, value]) => <DetailScoreCircle title={getDetailScoreTitle(key)} scorePercentage={value} />)}
        </Row0>
      </Row0>
      <span className="text-m-16 underline" style={{color: "var(--gray800)"}}>평가 기준을 더 자세히 알아볼까요?</span>
    </Col8>
  );
}

export default ReportScore;
