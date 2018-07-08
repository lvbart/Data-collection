/**
 * Font-Awesome Icons
 */
import React from 'react';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

const icons = [
  'adjust',
  'anchor',
  'archive',
  'area-chart',
  'arrows',
  'arrows-h',
  'arrows-v',
  'asterisk',
  'at',
  'automobile',
  'balance-scale',
  'ban',
  'bank',
  'bar-chart',
  'bar-chart-o',
  'barcode',
  'bars',
  'battery-0',
  'battery-1',
  'battery-2',
  'battery-3',
  'battery-4',
  'battery-empty',
  'battery-full',
  'battery-half',
  'battery-quarter',
  'battery-three-quarters',
  'bed',
  'beer',
  'bell',
  'bell-o',
  'bell-slash',
  'bell-slash-o',
  'bicycle',
  'binoculars',
  'birthday-cake',
  'bolt',
  'bomb',
  'book',
  'bookmark',
  'bookmark-o',
  'briefcase',
  'bug',
  'building',
  'building-o',
  'bullhorn',
  'bullseye',
  'bus',
  'cab',
  'calculator',
  'calendar',
  'calendar-check-o',
  'calendar-minus-o',
  'calendar-o',
  'calendar-plus-o',
  'calendar-times-o',
  'camera',
  'camera-retro',
  'car',
  'caret-square-o-down',
  'caret-square-o-left',
  'caret-square-o-right',
  'caret-square-o-up',
  'cart-arrow-down',
  'cart-plus',
  'cc',
  'certificate',
  'check',
  'check-circle',
  'check-circle-o',
  'check-square',
  'check-square-o',
  'child',
  'circle',
  'circle-o',
  'circle-o-notch',
  'circle-thin',
  'clock-o',
  'clone',
  'close',
  'cloud',
  'cloud-download',
  'cloud-upload',
  'code',
  'code-fork',
  'coffee',
  'cog',
  'cogs',
  'comment',
  'comment-o',
  'commenting',
  'commenting-o',
  'comments',
  'comments-o',
  'compass',
  'copyright',
  'creative-commons',
  'credit-card',
  'crop',
  'crosshairs',
  'cube',
  'cubes',
  'cutlery',
  'dashboard',
];

const FontAwesome = ({ match }) => (
  <div className="icons-wrapper">
    <PageTitleBar title={<IntlMessages id="sidebar.fontAwesome" />} match={match} />
    <div className="row">
      {icons.map((icon, key) => (
        <RctCollapsibleCard customClasses="icon-box mb-4" colClasses="col-sm-12 col-md-4" key={key}
          contentCustomClasses="item"
        >
          <span className="mr-10"><i className={"fa fa-" + icon} aria-hidden="true"></i></span> &nbsp;{icon}
        </RctCollapsibleCard>
      ))}
    </div>
  </div>
);

export default FontAwesome;
