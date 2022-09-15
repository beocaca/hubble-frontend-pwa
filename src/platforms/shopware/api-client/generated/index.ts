/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';
export { request } from './core/request';

export type { AccountNewsletterRecipientResult } from './models/AccountNewsletterRecipientResult';
export type { AclRole } from './models/AclRole';
export type { App } from './models/App';
export type { AppActionButton } from './models/AppActionButton';
export type { AppCmsBlock } from './models/AppCmsBlock';
export type { AppFlowAction } from './models/AppFlowAction';
export type { AppPaymentMethod } from './models/AppPaymentMethod';
export type { AppScriptCondition } from './models/AppScriptCondition';
export type { AppTemplate } from './models/AppTemplate';
export type { ArrayStruct } from './models/ArrayStruct';
export type { attributes } from './models/attributes';
export type { BfCategoryMapping } from './models/BfCategoryMapping';
export type { BfConfig } from './models/BfConfig';
export type { BfMarketplace } from './models/BfMarketplace';
export type { BfMarketplaceSettings } from './models/BfMarketplaceSettings';
export type { BfProductToDelete } from './models/BfProductToDelete';
export type { BfSupport } from './models/BfSupport';
export type { Cart } from './models/Cart';
export type { CartItems } from './models/CartItems';
export type { Category } from './models/Category';
export type { CategoryJsonApi } from './models/CategoryJsonApi';
export type { CmsBlock } from './models/CmsBlock';
export type { CmsPage } from './models/CmsPage';
export type { CmsSection } from './models/CmsSection';
export type { CmsSlot } from './models/CmsSlot';
export type { ContextTokenResponse } from './models/ContextTokenResponse';
export type { Country } from './models/Country';
export type { CountryJsonApi } from './models/CountryJsonApi';
export type { CountryState } from './models/CountryState';
export type { CountryStateJsonApi } from './models/CountryStateJsonApi';
export type { Criteria } from './models/Criteria';
export type { CrossSellingElementCollection } from './models/CrossSellingElementCollection';
export type { Currency } from './models/Currency';
export type { CurrencyCountryRounding } from './models/CurrencyCountryRounding';
export type { CurrencyJsonApi } from './models/CurrencyJsonApi';
export type { CustomEntity } from './models/CustomEntity';
export type { Customer } from './models/Customer';
export type { CustomerAddress } from './models/CustomerAddress';
export type { CustomerGroup } from './models/CustomerGroup';
export type { CustomerRecovery } from './models/CustomerRecovery';
export type { CustomerTag } from './models/CustomerTag';
export type { CustomerWishlist } from './models/CustomerWishlist';
export type { CustomerWishlistProduct } from './models/CustomerWishlistProduct';
export type { CustomField } from './models/CustomField';
export type { CustomFieldSet } from './models/CustomFieldSet';
export type { CustomFieldSetRelation } from './models/CustomFieldSetRelation';
export type { data } from './models/data';
export type { DeadMessage } from './models/DeadMessage';
export type { DeliveryTime } from './models/DeliveryTime';
export type { Document } from './models/Document';
export type { DocumentBaseConfig } from './models/DocumentBaseConfig';
export type { DocumentBaseConfigSalesChannel } from './models/DocumentBaseConfigSalesChannel';
export type { DocumentType } from './models/DocumentType';
export type { EntitySearchResult } from './models/EntitySearchResult';
export type { error } from './models/error';
export type { EventAction } from './models/EventAction';
export type { failure } from './models/failure';
export type { Flow } from './models/Flow';
export type { FlowSequence } from './models/FlowSequence';
export type { ImportExportFile } from './models/ImportExportFile';
export type { ImportExportLog } from './models/ImportExportLog';
export type { ImportExportProfile } from './models/ImportExportProfile';
export type { info } from './models/info';
export type { Integration } from './models/Integration';
export type { jsonapi } from './models/jsonapi';
export type { LandingPage } from './models/LandingPage';
export type { LandingPageJsonApi } from './models/LandingPageJsonApi';
export type { Language } from './models/Language';
export type { LanguageJsonApi } from './models/LanguageJsonApi';
export type { LineItem } from './models/LineItem';
export type { link } from './models/link';
export type { linkage } from './models/linkage';
export type { links } from './models/links';
export type { Locale } from './models/Locale';
export type { LogEntry } from './models/LogEntry';
export type { MailHeaderFooter } from './models/MailHeaderFooter';
export type { MailTemplate } from './models/MailTemplate';
export type { MailTemplateMedia } from './models/MailTemplateMedia';
export type { MailTemplateType } from './models/MailTemplateType';
export type { MainCategory } from './models/MainCategory';
export type { MainCategoryJsonApi } from './models/MainCategoryJsonApi';
export type { Media } from './models/Media';
export type { MediaDefaultFolder } from './models/MediaDefaultFolder';
export type { MediaFolder } from './models/MediaFolder';
export type { MediaFolderConfiguration } from './models/MediaFolderConfiguration';
export type { MediaTag } from './models/MediaTag';
export type { MediaThumbnail } from './models/MediaThumbnail';
export type { MediaThumbnailSize } from './models/MediaThumbnailSize';
export type { MessageQueueStats } from './models/MessageQueueStats';
export type { meta } from './models/meta';
export type { NavigationRouteResponse } from './models/NavigationRouteResponse';
export type { NewsletterRecipient } from './models/NewsletterRecipient';
export type { NewsletterRecipientJsonApi } from './models/NewsletterRecipientJsonApi';
export type { Notification } from './models/Notification';
export type { NumberRange } from './models/NumberRange';
export type { NumberRangeSalesChannel } from './models/NumberRangeSalesChannel';
export type { NumberRangeState } from './models/NumberRangeState';
export type { NumberRangeType } from './models/NumberRangeType';
export type { Order } from './models/Order';
export type { OrderAddress } from './models/OrderAddress';
export type { OrderCustomer } from './models/OrderCustomer';
export type { OrderDelivery } from './models/OrderDelivery';
export type { OrderDeliveryPosition } from './models/OrderDeliveryPosition';
export type { OrderLineItem } from './models/OrderLineItem';
export type { OrderRouteResponse } from './models/OrderRouteResponse';
export type { OrderTag } from './models/OrderTag';
export type { OrderTransaction } from './models/OrderTransaction';
export type { OrderTransactionCapture } from './models/OrderTransactionCapture';
export type { OrderTransactionCaptureRefund } from './models/OrderTransactionCaptureRefund';
export type { OrderTransactionCaptureRefundPosition } from './models/OrderTransactionCaptureRefundPosition';
export type { pagination } from './models/pagination';
export type { PaymentMethod } from './models/PaymentMethod';
export type { PaymentMethodJsonApi } from './models/PaymentMethodJsonApi';
export type { Plugin } from './models/Plugin';
export type { Product } from './models/Product';
export type { ProductConfiguratorSetting } from './models/ProductConfiguratorSetting';
export type { ProductCrossSelling } from './models/ProductCrossSelling';
export type { ProductCrossSellingAssignedProducts } from './models/ProductCrossSellingAssignedProducts';
export type { ProductDetailResponse } from './models/ProductDetailResponse';
export type { ProductExport } from './models/ProductExport';
export type { ProductFeatureSet } from './models/ProductFeatureSet';
export type { ProductJsonApi } from './models/ProductJsonApi';
export type { ProductKeywordDictionary } from './models/ProductKeywordDictionary';
export type { ProductListingCriteria } from './models/ProductListingCriteria';
export type { ProductListingFlags } from './models/ProductListingFlags';
export type { ProductListingResult } from './models/ProductListingResult';
export type { ProductManufacturer } from './models/ProductManufacturer';
export type { ProductMedia } from './models/ProductMedia';
export type { ProductPrice } from './models/ProductPrice';
export type { ProductReview } from './models/ProductReview';
export type { ProductSearchConfig } from './models/ProductSearchConfig';
export type { ProductSearchConfigField } from './models/ProductSearchConfigField';
export type { ProductSearchKeyword } from './models/ProductSearchKeyword';
export type { ProductSorting } from './models/ProductSorting';
export type { ProductStream } from './models/ProductStream';
export type { ProductStreamFilter } from './models/ProductStreamFilter';
export type { ProductVisibility } from './models/ProductVisibility';
export type { Promotion } from './models/Promotion';
export type { PromotionDiscount } from './models/PromotionDiscount';
export type { PromotionDiscountPrices } from './models/PromotionDiscountPrices';
export type { PromotionIndividualCode } from './models/PromotionIndividualCode';
export type { PromotionSalesChannel } from './models/PromotionSalesChannel';
export type { PromotionSetgroup } from './models/PromotionSetgroup';
export type { PropertyGroup } from './models/PropertyGroup';
export type { PropertyGroupOption } from './models/PropertyGroupOption';
export type { relationshipLinks } from './models/relationshipLinks';
export type { relationships } from './models/relationships';
export type { relationshipToMany } from './models/relationshipToMany';
export type { relationshipToOne } from './models/relationshipToOne';
export type { resource } from './models/resource';
export type { Rule } from './models/Rule';
export type { RuleCondition } from './models/RuleCondition';
export type { SalesChannel } from './models/SalesChannel';
export type { SalesChannelAnalytics } from './models/SalesChannelAnalytics';
export type { SalesChannelContext } from './models/SalesChannelContext';
export type { SalesChannelDomain } from './models/SalesChannelDomain';
export type { SalesChannelType } from './models/SalesChannelType';
export type { Salutation } from './models/Salutation';
export type { SalutationJsonApi } from './models/SalutationJsonApi';
export type { ScheduledTask } from './models/ScheduledTask';
export type { Script } from './models/Script';
export type { SeoUrl } from './models/SeoUrl';
export type { SeoUrlJsonApi } from './models/SeoUrlJsonApi';
export type { SeoUrlTemplate } from './models/SeoUrlTemplate';
export type { ShippingMethod } from './models/ShippingMethod';
export type { ShippingMethodJsonApi } from './models/ShippingMethodJsonApi';
export type { ShippingMethodPageRouteResponse } from './models/ShippingMethodPageRouteResponse';
export type { ShippingMethodPrice } from './models/ShippingMethodPrice';
export type { Sitemap } from './models/Sitemap';
export type { Snippet } from './models/Snippet';
export type { SnippetSet } from './models/SnippetSet';
export type { StateMachine } from './models/StateMachine';
export type { StateMachineHistory } from './models/StateMachineHistory';
export type { StateMachineState } from './models/StateMachineState';
export type { StateMachineTransition } from './models/StateMachineTransition';
export type { Struct } from './models/Struct';
export type { success } from './models/success';
export type { SuccessResponse } from './models/SuccessResponse';
export type { SystemConfig } from './models/SystemConfig';
export type { Tag } from './models/Tag';
export type { Tax } from './models/Tax';
export type { TaxRule } from './models/TaxRule';
export type { TaxRuleType } from './models/TaxRuleType';
export type { Theme } from './models/Theme';
export type { Unit } from './models/Unit';
export type { User } from './models/User';
export type { UserAccessKey } from './models/UserAccessKey';
export type { UserConfig } from './models/UserConfig';
export type { UserRecovery } from './models/UserRecovery';
export type { Webhook } from './models/Webhook';
export type { WebhookEventLog } from './models/WebhookEventLog';
export type { WishlistLoadRouteResponse } from './models/WishlistLoadRouteResponse';

export { AddressShopware } from './services/AddressShopware';
export { CartShopware } from './services/CartShopware';
export { CategoryShopware } from './services/CategoryShopware';
export { ContentShopware } from './services/ContentShopware';
export { DocumentShopware } from './services/DocumentShopware';
export { EndpointsSupportingCriteriaShopware } from './services/EndpointsSupportingCriteriaShopware';
export { LoginRegistrationShopware } from './services/LoginRegistrationShopware';
export { NewsletterShopware } from './services/NewsletterShopware';
export { OrderShopware } from './services/OrderShopware';
export { PaymentMethodShopware } from './services/PaymentMethodShopware';
export { PaymentShippingShopware } from './services/PaymentShippingShopware';
export { ProductShopware } from './services/ProductShopware';
export { ProfileShopware } from './services/ProfileShopware';
export { PwaShopware } from './services/PwaShopware';
export { SitemapRoutesShopware } from './services/SitemapRoutesShopware';
export { SystemContextShopware } from './services/SystemContextShopware';
export { WishlistShopware } from './services/WishlistShopware';
