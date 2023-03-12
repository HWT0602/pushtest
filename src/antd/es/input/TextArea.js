var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import { forwardRef } from 'react';
import * as React from 'react';
import RcTextArea from 'rc-textarea';
import classNames from 'classnames';
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import { FormItemInputContext } from '../form/context';
import useStyle from './style';
import SizeContext from '../config-provider/SizeContext';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import { triggerFocus } from './Input';
import DisabledContext from '../config-provider/DisabledContext';
import { ConfigContext } from '../config-provider';
const TextArea = /*#__PURE__*/forwardRef((_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      size: customizeSize,
      disabled: customDisabled,
      status: customStatus,
      allowClear
    } = _a,
    rest = __rest(_a, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear"]);
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  // ===================== Size =====================
  const size = React.useContext(SizeContext);
  const mergedSize = customizeSize || size;
  // ===================== Disabled =====================
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  // ===================== Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = React.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  // ===================== Ref =====================
  const innerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => {
    var _a;
    return {
      resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
      focus: option => {
        var _a, _b;
        triggerFocus((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: () => {
        var _a;
        return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  });
  const prefixCls = getPrefixCls('input', customizePrefixCls);
  // Allow clear
  let mergedAllowClear;
  if (typeof allowClear === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /*#__PURE__*/React.createElement(CloseCircleFilled, null)
    };
  }
  // ===================== Style =====================
  const [wrapSSR, hashId] = useStyle(prefixCls);
  return wrapSSR( /*#__PURE__*/React.createElement(RcTextArea, Object.assign({}, rest, {
    disabled: mergedDisabled,
    allowClear: mergedAllowClear,
    classes: {
      affixWrapper: classNames(`${prefixCls}-textarea-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === 'small',
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === 'large'
      }, getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus), hashId),
      countWrapper: classNames(`${prefixCls}-textarea`, `${prefixCls}-textarea-show-count`, hashId),
      textarea: classNames({
        [`${prefixCls}-borderless`]: !bordered,
        [`${prefixCls}-sm`]: mergedSize === 'small',
        [`${prefixCls}-lg`]: mergedSize === 'large'
      }, getStatusClassNames(prefixCls, mergedStatus), hashId)
    },
    prefixCls: prefixCls,
    suffix: hasFeedback && /*#__PURE__*/React.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon),
    ref: innerRef
  })));
});
export default TextArea;