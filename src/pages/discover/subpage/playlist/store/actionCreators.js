import * as actionTypes from "./constants";
import { getSongCategory, getSongCategoryList } from "@/services/recommend";
import { handleSongsCategory } from "@/utils/handle-data";

export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name,
});

// 获取歌单分类
export const getCategory = () => {
  return (dispatch) => {
    getSongCategory().then((res) => {
      const categoryData = handleSongsCategory(res.data);
      dispatch(changeCategoryAction(categoryData));
    });
  };
};

const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res,
});

// 获取歌单信息
export const getSongList = (page) => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    const name = getState().getIn(["songlist", "currentCategory"]);
    // 2.获取数据
    getSongCategoryList(name, page * actionTypes.PER_PAGE_NUMBER).then((res) => {
      dispatch(changeSongListAction(res.data));
    });
  };
};

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res,
});
