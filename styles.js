import { Dimensions, StyleSheet } from 'react-native';
import BaseTheme from './themes/base-theme';
import { FontNames } from "./themes/fontNames";

const styles = StyleSheet.create({
  containerPadding: {
    flex: 1,
    paddingTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerPaddingAll: {
    flex: 1,
    padding: 20
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerChildren: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null
  },
  // create account
  accCreatePhotoWrap: {
    height: 118,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(41, 150, 172, 1)',
    backgroundColor: '#fff',
  },
  accCreatePhotoBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  accCreatePhoto: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(41, 150, 172, 1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)'
  },
  accCreatePhotoCover: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(41, 150, 172, 1)',
  },
  accCreateEditCoverPhotoWrap: {
    position: 'absolute',
    zIndex: 15,
    top: 15,
    right: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8
  },
  accCreateEditCoverPhoto: {
    color: BaseTheme.baseColor,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  accCreateEditPhotoWrap: {
    position: 'absolute',
    zIndex: 15,
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseTheme.baseColor
  },
  accCreateEditPhoto: {
    color: '#fff',
    backgroundColor: BaseTheme.baseColor
  },
  accCreateInputBox: {
    height: 76,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: BaseTheme.grayLightTextColor,
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  bioMultiline: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  accCreateInputBoxMultiline: {
    minHeight: 70,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 32,
    paddingRight: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    // borderBottomWidth: 1
  },
  accListBox: {
    height: 72,
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: BaseTheme.grayLightTextColor,
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  accPostCreateImageWrap: {
    minHeight: 300,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(41, 150, 172, 1)'
  },
  accPostCreateImage: {
    flex: 1
  },
  accCreatePhotoBtn: {
    flex: 1
  },
  accAddLocationTextContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  accAddLocationText: {
    textAlign: 'center',
    width: 260,
    color: BaseTheme.placeholderTextColor,
    fontFamily: FontNames.mainFontRegular,
    fontSize: 14
  },
  accListDivider: {
    backgroundColor: 'rgba(230, 230, 232, 1)',
    height: 48,
    justifyContent: 'center',
  },
  accListDividerText: {
    textAlign: 'center',
    color: BaseTheme.darkTextColor,
    fontFamily: FontNames.mainFontRegular,
    fontSize: 16
  },
  // account screen
  accHeader: {
    height: 150
  },
  feedHeader: {
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: BaseTheme.baseBreezeColor
  },
  accPhotoBox: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 20,
    top: 60,
    zIndex: 15
  },
  accPhoto: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: BaseTheme.baseBreezeColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accPhotoCover: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(41, 150, 172, 1)',
  },
  accPanelWrap: {
    height: 50,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: '#fff'
  },
  accMenuBtns: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-end',
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 10,
    top: 100,
    right: 0,
    zIndex: 15
  },
  accPanel: {
    flex: 1,
    flexDirection: 'row'
  },
  accPanelFollow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  accPanelFollowItem: {
    marginLeft: 20
  },
  accPanelFollowText: {
    fontSize: 13,
    fontFamily: FontNames.mainFontBold,
    color: BaseTheme.baseTextColor,
  },
  accPanelFollowItemDigits: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: FontNames.mainFontBold,
    color: BaseTheme.baseBreezeColor
  },
  accPanelUser: {
    width: 50,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: 'rgba(0, 0, 0, 0.3)',
    borderRightColor: 'rgba(0, 0, 0, 0.3)'
  },
  accPanelFavorites: {
    width: 50
  },
  accDescriptionWrap: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // paddingBottom: 10,
    backgroundColor: '#fff',
  },
  accItemSwitcherWrap: {
    height: 46,
    borderBottomWidth: 1,
    borderBottomColor: BaseTheme.listBorderBottomColor,
    backgroundColor: '#fff'
  },
  accItemSwitcher: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  accItemSwitcherItemTitle: {
    fontSize: 15,
    fontFamily: FontNames.mainFontRegular,
    color: '#acaeb1',
  },
  accItemSwitcherItemActive: {
    // fontSize: 14,
    borderBottomWidth: 3,
    borderBottomColor: BaseTheme.baseBreezeColor
  },
  accItemSwitcherItemActiveTitle: {
    fontSize: 15,
    //fontFamily: FontNames.khulaBold,
    color: BaseTheme.baseTextColor
  },
  accItemSwitcherItemDigits: {
    marginLeft: 8,
    // paddingBottom: 2,
    fontFamily: FontNames.mainFontRegular,
    color: BaseTheme.baseTextColor,
    fontSize: 13
  },
  accItemSwitcherItemActiveDigits: {
    color: BaseTheme.baseBreezeColor,
    // fontSize: 16,
    //fontFamily: FontNames.khulaBold,
  },
  accItemsWrap: {
    flex: 1,
    backgroundColor: '#fff'
  },
  //searchAdvancedFilters
  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // create feed
  feedForButton: {
    flex: 0.48,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(250, 106, 72, 1)',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  feedForButtonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(250, 106, 72, 1)'
  },
  feedForButtonActive: {
    backgroundColor: 'rgba(250, 106, 72, 1)'
  },
  // Feed
  feedListItemContainer: {
    position: 'absolute',
    zIndex: 25,
    left: 0,
    right: 0
  },
  feedListItemWrap: {
    minHeight: 70,
    maxHeight: 210
  },
  feedListItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)'
  },
  values: {
    color: BaseTheme.darkTextColor,
    fontFamily: FontNames.mainFontBold,
    fontSize: 14
  },
  feedListItemDescItemTitle: {
    fontSize: 12,
    color: BaseTheme.grayTextColor,
    fontFamily: FontNames.mainFontRegular
  },
  feedListItemButton: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  feedListItemButtonWrap: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedItemWrap: {
    //
  },
  feedItemHead: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  feedItemFoot: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  feedSoldFooter: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 20
  },

  // listing
  imagePickIconContainer: {
    paddingLeft: 20,
    alignItems: 'flex-start',
    flex: 1,
    height: 50,
    marginTop: 20
  },
  imagePickIconBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  imagePickIconText: {
    color: '#ff6f56'
  },
  imagePickIcon: {
    color: '#ff6f56'
  },
  //listing search
  listingSearchItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)'
  },
  listingSearchImageContainer: {
    width: 70
  },
  listingSearchImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)'
  },
  listingSearchTextContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center'
  },
  accAddListingTextContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50
  },
  accAddListingText: {
    textAlign: 'center',
    width: 300
  },

  // search and Explore
  searchTabsContainer: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)'
  },
  seachTab: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  seachTabActive: {
    flex: 1,
    height: 44,
    borderBottomWidth: 3,
    borderBottomColor: BaseTheme.baseBreezeColor,
    justifyContent: 'center'
  },
  searchTabText: {
    textAlign: 'center',
    fontFamily: FontNames.mainFontRegular
  },
  searchTabTextActive: {
    textAlign: 'center',
    fontFamily: FontNames.mainFontRegular,
    color: BaseTheme.darkTextColor
  },
  searchFiltersTabsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)'
  },
  searchFiltersTab: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  searchFiltersBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  searchFiltersTabText: {
    color: '#2093ac',
    fontSize: 14,
    fontFamily: FontNames.mainFontRegular
  },
  searchFiltersTabTextSelected: {
    color: '#000',
    fontSize: 18
  },
  searchFiltersSelected: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)'
  },
  searchGelolocationContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  searchGelolocationPlacesContainer: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 9999,
    backgroundColor: '#fff'
  },
  searchGelolocationSelectedContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
    borderBottomWidth: 1,
    borderBottomColor: BaseTheme.listBorderBottomColor,
    paddingLeft: BaseTheme.listPaddingLeft,
    paddingRight: BaseTheme.listPaddingRight
  },
  searchGelolocationSelectedText: {
    flex: 5
  },
  searchGelolocationSelectedRemove: {
    color: BaseTheme.baseColorOpposite
  },
  accountNameSearchContainer: {
    paddingLeft: BaseTheme.listPaddingLeft,
    paddingRight: BaseTheme.listPaddingRight,
    marginTop: 16,
    height: 40,
    justifyContent: 'center'
  },
  accountNameSearch: {
    paddingLeft: BaseTheme.listPaddingLeft,
    paddingRight: BaseTheme.listPaddingRight,
    borderColor: BaseTheme.grayLightTextColor,
    borderWidth: 1,
    borderRadius: 5,
    height: 40
  },
  accountNameSearchText: {
    height: 40,
    fontFamily: FontNames.mainFontRegular,
    color: BaseTheme.darkTextColor,
    fontSize: 16
  },
  searchTextClose: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  searchNoResults: {
    marginTop: 30,
    flex: 1
  },
  searchNoResultsText: {
    fontSize: 24,
    fontFamily: FontNames.mainFontBold,
    textAlign: 'center'
  },
  // swipe
  updateBtn: {
    flex: 1,
    width: 75,
    // borderBottomWidth: 1,
    // borderBottomColor: BaseTheme.listBorderBottomColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteBtn: {
    backgroundColor: BaseTheme.baseBreezeColor,
    flex: 1,
    width: 75,
    // borderBottomWidth: 1,
    // borderBottomColor: BaseTheme.listBorderBottomColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  updateBtnText: {
    fontSize: 18,
    color: BaseTheme.darkTextColor,
    fontFamily: FontNames.mainFontRegular
  },
  deleteBtnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: FontNames.mainFontRegular
  },

  // broker details
  brokerDetailsHeaderContainer: {
    paddingHorizontal: 20
  },
  brokerDetailsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 120,
  },
  brokerDetailsImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: BaseTheme.grayLightTextColor
  },
  brokerDetailsInfoContainer: {
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 25,
    paddingVertical: 20
  },
  brokerDetailsCardText: {
    fontSize: 18,
    textAlign: 'center',
    color: BaseTheme.darkTextColor,
    fontFamily: FontNames.mainFontBold
  },
  brokerDetailsSubCardText:{
    fontSize: 18,
    textAlign: 'center',
    color: BaseTheme.darkTextColor,
    fontFamily: FontNames.mainFontRegular
  },
  brokerDetailsRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  brokerDetailsReviewText: {
    color: BaseTheme.baseBreezeColor,
    fontFamily: FontNames.mainFontBold,
    fontSize: 18,
    marginLeft: 4
  },
  brokerDetailsWriteButton: {
    backgroundColor: BaseTheme.white,
    borderColor: BaseTheme.baseBreezeColor,
    borderWidth: 3,
    height: 54,
    borderRadius: 4,
    marginBottom: 20
  },
  brokerDetailsTextWriteButton: {
    color: BaseTheme.baseBreezeColor,
    fontFamily: FontNames.mainFontBold,
    fontSize: 16
  },
  brokerDetailsInput: {
    color: BaseTheme.darkTextColor,
    paddingRight: 20
  },
  brokerDetailsContacts: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    marginTop: 10
  },
  brokerDetailsContactsIcon: {
    color: BaseTheme.baseBreezeColor,
    paddingTop: 2
  },
  brokerDetailsContactsText: {
    color: BaseTheme.darkTextColor,
    fontFamily: FontNames.mainFontRegular,
    paddingLeft: 10,
    fontSize: 18
  },

  // messages

  msgPageTab: {
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgPageTabActive: {
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(54, 171, 192, 1)'
  },

  // connections
  connectionConnectedIcon: {
    color: BaseTheme.baseColorOpposite
  },
  connectionConnectedIconCheck: {
    color: BaseTheme.baseColorOpposite,
    position: 'absolute',
    top: 4,
    right: -4
  },
  connectionAddIcon: {
    color: BaseTheme.baseColorOpposite,
    paddingRight: 6
  },
  connectionUsers: {
    color: BaseTheme.baseBreezeColor,
  },
  connectionAddText: {
    color: BaseTheme.baseColorOpposite,
    fontSize: 8
  },
  connectionAddIconContainer: {
    width: 50,
    marginRight: 10,
    position: 'relative'
  },
  connectionsIcon: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 15,
    position: 'relative',
    bottom: 6,
    marginRight: 10
  },
  // chats
  chatItemContainer: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)'
  },
  chatItemWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  chatItemImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)'
  },
  editProfile: {
    backgroundColor: '#fff',
    borderRadius: 2,
    height: 30,
    width: 90,
    bottom: 8,
  },
  editProfileText: {
    color: BaseTheme.baseTextColor,
    fontFamily: FontNames.mainFontRegular,
    fontSize: 14
  },
  fullName: {
    fontSize: 18,
    fontFamily: FontNames.mainFontBold,
    color: BaseTheme.baseTextColor,
    marginBottom: 8
  },
  username: {
    fontFamily: FontNames.mainFontRegular,
    color: BaseTheme.baseTextColor,
    marginBottom: 8,
    fontSize: 16
  },
  followButton: {
    marginTop: 18,
    marginRight: 18,
    height: 28,
    borderRadius: 2,
    borderWidth: 2,
    padding: 5,
    width: 80,
    // flex: .3,
    borderColor: BaseTheme.baseBreezeColor,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  followButtonActive: {
    backgroundColor: BaseTheme.baseBreezeColor
  },
  followButtonText: {
    color: BaseTheme.baseBreezeColor,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: FontNames.mainFontBold
  },
  followButtonTextActive: {
    color: '#fff',
  },
  biography: {
    marginBottom: 10,
    // fontSize: 14,
    fontFamily: FontNames.mainFontRegular,
    color: BaseTheme.grayTextColor,
    lineHeight: 20
  },
  readMore: {
    color: BaseTheme.baseColor,
    fontFamily: FontNames.mainFontBold
  },
  iconMap: {
    color: BaseTheme.baseBreezeColor
  },
  areasOfServiceButton: {
    height: 64,
    borderRadius: 4,
    backgroundColor: BaseTheme.baseBreezeColor
  },
  areasOfServiceButtonText: {
    fontFamily: FontNames.mainFontRegular
  }
});

export default styles;

export const stylesFeeds = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: BaseTheme.listBorderBottomColor,
  },
  touchableContainer: {
    height: 56,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  updateBtn: {
    flex: 1,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteBtn: {
    backgroundColor: BaseTheme.baseBreezeColor,
    flex: 1,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteBtnText:{
    color: '#fff'
  },
  renderItemContainer: {
    height: 70
  },
  renderItem: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#fff'
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerButtonText: {
    fontSize: 18,
    color: BaseTheme.baseBreezeColor,
    fontFamily: FontNames.mainFontBold
  },
  textFeedName: {
    color: BaseTheme.darkTextColor,
    fontSize: 18,
    fontFamily: FontNames.mainFontRegular
  },
  textFeedOptions: {
    fontWeight: 'bold',
    marginRight: 12,
    fontSize: 18
  },
  icon: {
    color: BaseTheme.baseBreezeColor,
    marginRight: 5
  },
  margin: {
    paddingTop: 2,
    marginRight: 12
  },
  customFooter: {
    flex: 1,
    paddingTop: 20
  }
});

export const stylesTabs = StyleSheet.create({
  tabBarStyle: {
    height: 40,
    marginTop: 9,
    borderBottomWidth: 1,
    borderBottomColor: BaseTheme.listBorderBottomColor,
  },
  tabBarTextStyle: {
    fontFamily: FontNames.mainFontRegular
  },
  activeTabTextStyle: {
    fontFamily: FontNames.mainFontBold,
    color: BaseTheme.darkTextColor
  },
  tabStyle: {
    height: 39,
    alignItems: 'center',
    width: Dimensions.get('window').width / 3
  },
  badgeText: {
    color: BaseTheme.baseBreezeColor,
    fontSize: 12,
  },
  badgeBubble: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  emptyView: {
    height: 50
  },
  emptyContainer: {
    flex: 1,
    paddingTop: 20
  }
});
