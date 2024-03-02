import { useEffect, useState } from "react";
import axios from "axios";
import MegaSearch from "./MegaSearch";
import MegaList from "./MegaList";
import MegaMenu from "./MegaMenu";
import MegaPopup from "./MegaPopup";
import { Container } from "../styled/megaboxStyle";
import Paging from "./MegaPaging";

//메인페이지
const MegaMain = () => {
  const [data, setData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [info, setInfo] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const url = `https://gist.githubusercontent.com/wonchuring/8cfab85948f0e25c5a962508877512fe/raw/ba7ae5d41fcc4303f7c31012a2f055eaf386f8b1/megabox.json`;
    axios.get(url).then((res) => {
      setData(res.data.megabox);
      setDataList(res.data.megabox);
    });
  }, []);

  const onSearch = (text) => {
    const filteredData = dataList.filter((item) => item.movieNm.includes(text));
    setCurrentPage(1);
    setData(filteredData);
  };

  const onLike = (rank) => {
    setData((prevData) => prevData.map((item) => (item.rank === rank ? (item.isLike ? { ...item, likeNum: item.likeNum - 1, isLike: false } : { ...item, likeNum: item.likeNum + 1, isLike: true }) : item)));
  };

  const onShowScreen = (isScreening) => {
    if (isScreening === "All") {
      setData(dataList);
    } else {
      const filteredData = dataList.filter((item) => item.isScreening === isScreening);
      setCurrentPage(1);
      setData(filteredData);
    }
  };

  const onPopup = (rank) => {
    setInfo(data.find((item) => item.rank === rank));
    setIsPopup(true);
  };

  const closePopup = () => {
    setIsPopup(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <h2 className="logo">
        <img src="./public/images/logo.png" alt="" />
      </h2>
      <MegaSearch onSearch={onSearch} dataList={dataList} />
      <MegaMenu onShowScreen={onShowScreen} />
      <MegaList data={currentItems} onLike={onLike} onPopup={onPopup} />
      {isPopup && <MegaPopup info={info} closePopup={closePopup} />}
      <Paging currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate} />
    </Container>
  );
};

export default MegaMain;
