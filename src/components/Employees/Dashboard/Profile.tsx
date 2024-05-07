import { Typography, Divider, Row, Card, Avatar, Col } from "antd";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
const { Title } = Typography;
export const Profile = () => {
  return (
    <div>
      <div className="bg-slate-200 pb-4">
        <div className="flex justify-between bg-slate-200 p-1 rounded-md w-full">
          <div className="border-l-4 border-secondary-color h-9 flex items-center">
            <Title level={5} className="ml-2">
              Employee Details
            </Title>
          </div>
        </div>
        <Divider />
        <div className="flex p-2">
          <Avatar size={100}>MK</Avatar>
          <div className="w-2/5 ml-2">
            <Title level={2}>John Doe</Title>
            <Row className="flex justify-between text-slate-400 font-semibold">
              <span>ROLE</span>
              <span>PHONE NO</span>
              <span>EMAIL ADDRESS</span>
            </Row>
            <Row className="flex justify-between mt-4 font-semibold">
              <span>Employee</span>
              <span>+923127100000</span>
              <span>Name@AccellionX.com</span>
            </Row>
          </div>
        </div>
        <Row className="flex justify-around">
          <Col span={5}>
            <Card className="mr-2 bg-slate-300 flex">
              <Avatar>
                <FaArrowRightToBracket />
              </Avatar>

              <div>
                <Title level={5}>9: 09 A.M</Title>
                <span>Checked In</span>
              </div>
            </Card>
          </Col>
          <Col span={5}>
            <Card className="mr-2 bg-slate-300 flex">
              <Avatar>
                <FaArrowRightToBracket />
              </Avatar>

              <div>
                <Title level={5}>9: 09 A.M</Title>
                <span>Checked In</span>
              </div>
            </Card>
          </Col>
          <Col span={5}>
            <Card className="mr-2 bg-slate-300 flex">
              <Avatar>
                <FaArrowRightToBracket />
              </Avatar>

              <div>
                <Title level={5}>9: 09 A.M</Title>
                <span>Checked In</span>
              </div>
            </Card>
          </Col>
          <Col span={5}>
            <Card className="mr-2 bg-slate-300 flex">
              <Avatar>
                <FaArrowRightToBracket />
              </Avatar>

              <div>
                <Title level={5}>9: 09 A.M</Title>
                <span>Checked In</span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="bg-slate-200 pb-4 mt-2">
        <div className="flex justify-between bg-slate-200 p-1 rounded-md w-full">
          <div className="border-l-4 border-secondary-color h-9 flex items-center">
            <Title level={5} className="ml-2">
              Attendence History
            </Title>
          </div>
        </div>
        <Divider />
        <Row className="flex justify-around">
          <Col span={6}>
            <div className="mr-2 bg-slate-300 p-2 rounded-lg">
              <div className="flex justify-between items-center !w-full mb-4">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  28 May 2024
                </span>
                <div className="border-2 border-white bg-white font-semibold text-slate-500 rounded-full p-1">
                  Pending
                </div>
              </div>

              <div className="flex justify-between items-center w-full textslate=500 mb-4">
                <span>
                  Check In Time
                </span>
                <span>
                  Check Out Time
                </span>
              </div>
              <div className="flex justify-between items-center !w-full font-bold">
                <span>
                    9: 00 A.M
                </span>
                <span>
                    6: 00 P.M
                </span>
              </div>
            </div>
          </Col>
          <Col span={6}>
          <div className="mr-2 bg-slate-300 p-2 rounded-lg">
              <div className="flex justify-between items-center !w-full mb-4">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  28 May 2024
                </span>
                <div className="border-2 border-white bg-white font-semibold text-slate-500 rounded-full p-1">
                  Pending
                </div>
              </div>

              <div className="flex justify-between items-center w-full textslate=500 mb-4">
                <span>
                  Check In Time
                </span>
                <span>
                  Check Out Time
                </span>
              </div>
              <div className="flex justify-between items-center !w-full font-bold">
                <span>
                    9: 00 A.M
                </span>
                <span>
                    6: 00 P.M
                </span>
              </div>
            </div>
          </Col>
          <Col span={6}>
          <div className="mr-2 bg-slate-300 p-2 rounded-lg">
              <div className="flex justify-between items-center !w-full mb-4">
                <span className="flex items-center">
                  <FaRegClock className="mr-1" />
                  28 May 2024
                </span>
                <div className="border-2 border-white bg-white font-semibold text-slate-500 rounded-full p-1">
                  Pending
                </div>
              </div>

              <div className="flex justify-between items-center w-full textslate=500 mb-4">
                <span>
                  Check In Time
                </span>
                <span>
                  Check Out Time
                </span>
              </div>
              <div className="flex justify-between items-center !w-full font-bold">
                <span>
                    9: 00 A.M
                </span>
                <span>
                    6: 00 P.M
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
