import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_service_page_services_grid_services_icon" AS ENUM('MdOutlineAccountBalance', 'MdOutlineGavel', 'MdOutlineQueryStats', 'MdOutlinePayments');
  CREATE TYPE "public"."enum_about_page_foundation_pillars_icon" AS ENUM('MdOutlineGavel', 'MdOutlinePrecisionManufacturing');
  CREATE TYPE "public"."enum_about_page_accreditations_items_icon_type" AS ENUM('text', 'icon');
  CREATE TYPE "public"."enum_about_page_accreditations_items_icon" AS ENUM('MdOutlineVerifiedUser', 'MdOutlineLanguage');
  CREATE TYPE "public"."enum_home_page_services_items_icon" AS ENUM('MdOutlineAccountBalance', 'MdOutlineGavel', 'MdOutlineQueryStats', 'MdOutlinePayments');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "author" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"designation" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "blog_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "blogs_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar NOT NULL
  );
  
  CREATE TABLE "blogs_table_of_contents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"anchor" varchar NOT NULL
  );
  
  CREATE TABLE "blogs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"excerpt" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"featured_image_id" integer NOT NULL,
  	"author_id" integer NOT NULL,
  	"published_at" timestamp(3) with time zone NOT NULL,
  	"is_featured" boolean DEFAULT false,
  	"is_trending" boolean DEFAULT false,
  	"read_time" numeric,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "blogs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_categories_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"author_id" integer,
  	"blog_categories_id" integer,
  	"blogs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "resource_page_statutory_forms_additional_downloads" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"file_id" integer NOT NULL
  );
  
  CREATE TABLE "resource_page_faqs_section_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "resource_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'COMPLIANCE HUB',
  	"hero_title" varchar DEFAULT 'Resources & Templates',
  	"hero_description" varchar DEFAULT 'Empowering our clients with essential financial tools, regulatory templates, and strategic documents for Nepal''s fiscal landscape.',
  	"statutory_forms_title" varchar DEFAULT 'Statutory Forms & Templates',
  	"statutory_forms_primary_form_version" varchar DEFAULT 'v2.4 (2024)',
  	"statutory_forms_primary_form_title" varchar DEFAULT 'VAT Registration Package',
  	"statutory_forms_primary_form_description" varchar DEFAULT 'The complete guide and application package for Value Added Tax registration under the Inland Revenue Department (IRD) of Nepal.',
  	"statutory_forms_primary_form_button_text" varchar DEFAULT 'Download Complete Package',
  	"statutory_forms_primary_form_file_id" integer,
  	"statutory_forms_secondary_form_title" varchar DEFAULT 'Audit Checklists',
  	"statutory_forms_secondary_form_description" varchar DEFAULT 'Comprehensive internal audit checklists for manufacturing and service-based entities to ensure financial health.',
  	"statutory_forms_secondary_form_button_text" varchar DEFAULT 'Get Templates',
  	"statutory_forms_secondary_form_link" varchar DEFAULT '#',
  	"faqs_section_title" varchar DEFAULT 'Regulatory FAQs',
  	"faqs_section_description" varchar DEFAULT 'Expert answers to common queries regarding Nepal''s taxation and accounting standards.',
  	"newsletter_title" varchar DEFAULT 'Regulatory Alerts',
  	"newsletter_description" varchar DEFAULT 'Stay informed about changes in the Finance Act, circulars from the NRB, and new IFRS/NFRS updates delivered directly to your inbox.',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "service_page_services_grid_services_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE "service_page_services_grid_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"icon" "enum_service_page_services_grid_services_icon"
  );
  
  CREATE TABLE "service_page_sector_specialization_sectors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "service_page_ican_faq_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "service_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'OUR EXPERTISE',
  	"hero_title" varchar DEFAULT 'Precision in Every Ledger',
  	"hero_description" varchar DEFAULT 'Navigating the complexities of Nepalese financial regulations with institutional rigor and deep-sector expertise.',
  	"sector_specialization_badge" varchar DEFAULT 'SECTOR SPECIALIZATION',
  	"sector_specialization_title" varchar DEFAULT 'Industry-Specific Solutions',
  	"ican_faq_title" varchar DEFAULT 'Nepal ICAN Compliance FAQ',
  	"ican_faq_description" varchar DEFAULT 'Essential information regarding the Institute of Chartered Accountants of Nepal standards.',
  	"cta_title" varchar DEFAULT 'Ready to align your financial strategy?',
  	"cta_description" varchar DEFAULT 'Consult with our lead partners today and ensure your enterprise meets the highest standards of fiscal integrity.',
  	"cta_primary_button_text" varchar DEFAULT 'Schedule a Meeting',
  	"cta_primary_button_link" varchar DEFAULT '/contact',
  	"cta_secondary_button_text" varchar DEFAULT 'View Firm Profile',
  	"cta_secondary_button_link" varchar DEFAULT '/about',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_page_foundation_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon" "enum_about_page_foundation_pillars_icon"
  );
  
  CREATE TABLE "about_page_leadership_leaders" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"quote" varchar NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "about_page_accreditations_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"icon_type" "enum_about_page_accreditations_items_icon_type" NOT NULL,
  	"icon_text" varchar,
  	"icon" "enum_about_page_accreditations_items_icon"
  );
  
  CREATE TABLE "about_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'ESTABLISHED AUTHORITY',
  	"hero_title" varchar DEFAULT 'The Legacy of Financial Stewardship',
  	"hero_description" varchar DEFAULT 'Guiding enterprises through the complexities of global finance with unwavering precision, local expertise, and a commitment to institutional excellence since our founding.',
  	"hero_highlight_text" varchar DEFAULT 'A MEMBER OF THE INSTITUTE OF CHARTERED ACCOUNTANTS OF NEPAL',
  	"hero_background_image_id" integer,
  	"foundation_badge" varchar DEFAULT 'Foundation of Purpose',
  	"foundation_title" varchar DEFAULT 'Architecture of a Modern Advisory',
  	"foundation_description" varchar DEFAULT 'Our firm is built upon three pillars that define every audit, advisory, and corporate strategy we execute. We do not just process numbers; we engineer trust.',
  	"foundation_vision_title" varchar DEFAULT 'Our Vision',
  	"foundation_vision_description" varchar DEFAULT 'To be the most trusted financial vanguard in the region, bridging Nepalese enterprise with global standards.',
  	"foundation_mission_title" varchar DEFAULT 'Our Mission',
  	"foundation_mission_description" varchar DEFAULT 'Delivering uncompromising integrity and analytical depth to empower sustainable corporate growth.',
  	"foundation_stewardship_title" varchar DEFAULT 'Client Stewardship',
  	"foundation_stewardship_description" varchar DEFAULT 'Our relationships are viewed as decades-long partnerships, prioritizing the long-term stability of the institutions we serve over short-term metrics.',
  	"leadership_badge" varchar DEFAULT 'Executive Leadership',
  	"leadership_title_line1" varchar DEFAULT 'Managed by Experts,',
  	"leadership_title_line2" varchar DEFAULT 'Driven by Excellence.',
  	"leadership_description" varchar DEFAULT 'Our partners bring over 60 years of combined experience across auditing, taxation, and law.',
  	"accreditations_badge" varchar DEFAULT 'Institutional Recognition',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_page_compliance_badge_badges" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_services_items_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_services_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_home_page_services_items_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"button_text" varchar NOT NULL,
  	"button_link" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_our_impact_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Member of ICAN Nepal',
  	"hero_title" varchar DEFAULT 'Professional Financial Excellence.',
  	"hero_description" varchar DEFAULT 'Navigating the complexities of Nepalese corporate law and global financial standards with architectural precision and unwavering integrity.',
  	"hero_primary_button_text" varchar DEFAULT 'Explore Advisory',
  	"hero_primary_button_href" varchar DEFAULT '/services',
  	"hero_secondary_button_text" varchar DEFAULT 'Our Specializations',
  	"hero_secondary_button_href" varchar DEFAULT '/about',
  	"hero_background_image_id" integer,
  	"compliance_badge_badge" varchar DEFAULT 'Regulatory Standard',
  	"compliance_badge_title" varchar DEFAULT 'Institute of Chartered Accountants of Nepal (ICAN) Licensed',
  	"services_badge" varchar DEFAULT 'Core Competencies',
  	"services_title" varchar DEFAULT 'Strategic Financial Services',
  	"services_description" varchar DEFAULT 'A multidisciplinary approach to fiscal health, combining local expertise with international standards.',
  	"our_impact_badge" varchar DEFAULT 'Our Trajectory',
  	"our_impact_title" varchar DEFAULT 'Decades of Fiscal Authority.',
  	"our_impact_description" varchar DEFAULT 'Since our inception, we have been the standard-bearer for financial integrity in Nepal, guiding organizations from startup to public listing.',
  	"our_impact_testimonial_quote" varchar DEFAULT '"DB Mainaly & Associates transformed our corporate governance structure, enabling our transition to a public entity."',
  	"our_impact_testimonial_author_initials" varchar DEFAULT 'SC',
  	"our_impact_testimonial_author_name" varchar DEFAULT 'Sunil Chaudhary',
  	"our_impact_testimonial_author_role" varchar DEFAULT 'CEO, Apex Infrastructure',
  	"our_impact_image_id" integer,
  	"latest_insights_badge" varchar DEFAULT 'Financial Intelligence',
  	"latest_insights_title" varchar DEFAULT 'Latest Insights',
  	"latest_insights_link_text" varchar DEFAULT 'View All Publications',
  	"latest_insights_link_url" varchar DEFAULT '/blog',
  	"final_cta_title" varchar DEFAULT 'Ready to secure your financial future?',
  	"final_cta_description" varchar DEFAULT 'Schedule a confidential consultation with our principal partners to discuss your corporate advisory or audit requirements.',
  	"final_cta_primary_button_text" varchar DEFAULT 'Contact Principal Partner',
  	"final_cta_primary_button_href" varchar DEFAULT '/contact',
  	"final_cta_secondary_button_text" varchar DEFAULT 'Request Firm Profile',
  	"final_cta_secondary_button_href" varchar DEFAULT '/about',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_page_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blogs_id" integer
  );
  
  CREATE TABLE "contact_page_inquiry_form_service_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "contact_page_faq_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_badge" varchar DEFAULT 'Get in Touch',
  	"hero_title" varchar DEFAULT 'Let''s secure your financial future together',
  	"hero_description" varchar DEFAULT 'Expert financial advisory and corporate legal solutions tailored for Nepal''s evolving economic landscape.',
  	"inquiry_form_title" varchar DEFAULT 'Send us a Message',
  	"inquiry_form_description" varchar DEFAULT 'Briefly outline your requirements and our partners will contact you within 24 business hours.',
  	"inquiry_form_full_name_label" varchar DEFAULT 'Full Name',
  	"inquiry_form_full_name_placeholder" varchar DEFAULT 'John Doe',
  	"inquiry_form_email_label" varchar DEFAULT 'Email Address',
  	"inquiry_form_email_placeholder" varchar DEFAULT 'john@company.com',
  	"inquiry_form_service_label" varchar DEFAULT 'Service Interest',
  	"inquiry_form_phone_label" varchar DEFAULT 'Phone Number',
  	"inquiry_form_phone_placeholder" varchar DEFAULT '+977 1-XXXXXXX',
  	"inquiry_form_message_label" varchar DEFAULT 'How can we help?',
  	"inquiry_form_message_placeholder" varchar DEFAULT 'Describe your consultation needs...',
  	"inquiry_form_submit_button_text" varchar DEFAULT 'Submit Inquiry',
  	"office_headquarters_title" varchar DEFAULT 'Office Headquarters',
  	"office_address_block_title" varchar DEFAULT 'Physical Address',
  	"office_address_lines" varchar DEFAULT 'DB Mainaly & Associates Building
  Bansidhar Marg, Bishalnagar
  Kathmandu, Nepal (100m South of the Embassy of Finland)',
  	"office_phone_block_title" varchar DEFAULT 'Phone & Fax',
  	"office_phone_lines" varchar DEFAULT '+977 1 4483012
  +977 9851000000',
  	"office_email_block_title" varchar DEFAULT 'Electronic Mail',
  	"office_email_lines" varchar DEFAULT 'info@dbmainaly.com
  support@dbmainaly.com',
  	"map_card_latitude" numeric DEFAULT 27.724097 NOT NULL,
  	"map_card_longitude" numeric DEFAULT 85.337111 NOT NULL,
  	"faq_title" varchar DEFAULT 'Frequently Asked Questions',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "author" ADD CONSTRAINT "author_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_tags" ADD CONSTRAINT "blogs_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_table_of_contents" ADD CONSTRAINT "blogs_table_of_contents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_author_id_author_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."author"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs" ADD CONSTRAINT "blogs_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_author_fk" FOREIGN KEY ("author_id") REFERENCES "public"."author"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_categories_fk" FOREIGN KEY ("blog_categories_id") REFERENCES "public"."blog_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resource_page_statutory_forms_additional_downloads" ADD CONSTRAINT "resource_page_statutory_forms_additional_downloads_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resource_page_statutory_forms_additional_downloads" ADD CONSTRAINT "resource_page_statutory_forms_additional_downloads_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resource_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resource_page_faqs_section_questions" ADD CONSTRAINT "resource_page_faqs_section_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resource_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resource_page" ADD CONSTRAINT "resource_page_statutory_forms_primary_form_file_id_media_id_fk" FOREIGN KEY ("statutory_forms_primary_form_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resource_page" ADD CONSTRAINT "resource_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "service_page_services_grid_services_features" ADD CONSTRAINT "service_page_services_grid_services_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_page_services_grid_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_page_services_grid_services" ADD CONSTRAINT "service_page_services_grid_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_page_sector_specialization_sectors" ADD CONSTRAINT "service_page_sector_specialization_sectors_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "service_page_sector_specialization_sectors" ADD CONSTRAINT "service_page_sector_specialization_sectors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_page_ican_faq_faqs" ADD CONSTRAINT "service_page_ican_faq_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_page" ADD CONSTRAINT "service_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page_foundation_pillars" ADD CONSTRAINT "about_page_foundation_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_leadership_leaders" ADD CONSTRAINT "about_page_leadership_leaders_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page_leadership_leaders" ADD CONSTRAINT "about_page_leadership_leaders_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_accreditations_items" ADD CONSTRAINT "about_page_accreditations_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_hero_background_image_id_media_id_fk" FOREIGN KEY ("hero_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_compliance_badge_badges" ADD CONSTRAINT "home_page_compliance_badge_badges_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_services_items_points" ADD CONSTRAINT "home_page_services_items_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_services_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_services_items" ADD CONSTRAINT "home_page_services_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_our_impact_stats" ADD CONSTRAINT "home_page_our_impact_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_background_image_id_media_id_fk" FOREIGN KEY ("hero_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_our_impact_image_id_media_id_fk" FOREIGN KEY ("our_impact_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_rels" ADD CONSTRAINT "home_page_rels_blogs_fk" FOREIGN KEY ("blogs_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_inquiry_form_service_options" ADD CONSTRAINT "contact_page_inquiry_form_service_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_faq_items" ADD CONSTRAINT "contact_page_faq_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page" ADD CONSTRAINT "contact_page_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "author_image_idx" ON "author" USING btree ("image_id");
  CREATE INDEX "author_updated_at_idx" ON "author" USING btree ("updated_at");
  CREATE INDEX "author_created_at_idx" ON "author" USING btree ("created_at");
  CREATE UNIQUE INDEX "blog_categories_name_idx" ON "blog_categories" USING btree ("name");
  CREATE UNIQUE INDEX "blog_categories_slug_idx" ON "blog_categories" USING btree ("slug");
  CREATE INDEX "blog_categories_updated_at_idx" ON "blog_categories" USING btree ("updated_at");
  CREATE INDEX "blog_categories_created_at_idx" ON "blog_categories" USING btree ("created_at");
  CREATE INDEX "blogs_tags_order_idx" ON "blogs_tags" USING btree ("_order");
  CREATE INDEX "blogs_tags_parent_id_idx" ON "blogs_tags" USING btree ("_parent_id");
  CREATE INDEX "blogs_table_of_contents_order_idx" ON "blogs_table_of_contents" USING btree ("_order");
  CREATE INDEX "blogs_table_of_contents_parent_id_idx" ON "blogs_table_of_contents" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "blogs_slug_idx" ON "blogs" USING btree ("slug");
  CREATE INDEX "blogs_featured_image_idx" ON "blogs" USING btree ("featured_image_id");
  CREATE INDEX "blogs_author_idx" ON "blogs" USING btree ("author_id");
  CREATE INDEX "blogs_seo_seo_image_idx" ON "blogs" USING btree ("seo_image_id");
  CREATE INDEX "blogs_updated_at_idx" ON "blogs" USING btree ("updated_at");
  CREATE INDEX "blogs_created_at_idx" ON "blogs" USING btree ("created_at");
  CREATE INDEX "blogs_rels_order_idx" ON "blogs_rels" USING btree ("order");
  CREATE INDEX "blogs_rels_parent_idx" ON "blogs_rels" USING btree ("parent_id");
  CREATE INDEX "blogs_rels_path_idx" ON "blogs_rels" USING btree ("path");
  CREATE INDEX "blogs_rels_blog_categories_id_idx" ON "blogs_rels" USING btree ("blog_categories_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_author_id_idx" ON "payload_locked_documents_rels" USING btree ("author_id");
  CREATE INDEX "payload_locked_documents_rels_blog_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_categories_id");
  CREATE INDEX "payload_locked_documents_rels_blogs_id_idx" ON "payload_locked_documents_rels" USING btree ("blogs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "resource_page_statutory_forms_additional_downloads_order_idx" ON "resource_page_statutory_forms_additional_downloads" USING btree ("_order");
  CREATE INDEX "resource_page_statutory_forms_additional_downloads_parent_id_idx" ON "resource_page_statutory_forms_additional_downloads" USING btree ("_parent_id");
  CREATE INDEX "resource_page_statutory_forms_additional_downloads_file_idx" ON "resource_page_statutory_forms_additional_downloads" USING btree ("file_id");
  CREATE INDEX "resource_page_faqs_section_questions_order_idx" ON "resource_page_faqs_section_questions" USING btree ("_order");
  CREATE INDEX "resource_page_faqs_section_questions_parent_id_idx" ON "resource_page_faqs_section_questions" USING btree ("_parent_id");
  CREATE INDEX "resource_page_statutory_forms_primary_form_statutory_for_idx" ON "resource_page" USING btree ("statutory_forms_primary_form_file_id");
  CREATE INDEX "resource_page_seo_seo_image_idx" ON "resource_page" USING btree ("seo_image_id");
  CREATE INDEX "service_page_services_grid_services_features_order_idx" ON "service_page_services_grid_services_features" USING btree ("_order");
  CREATE INDEX "service_page_services_grid_services_features_parent_id_idx" ON "service_page_services_grid_services_features" USING btree ("_parent_id");
  CREATE INDEX "service_page_services_grid_services_order_idx" ON "service_page_services_grid_services" USING btree ("_order");
  CREATE INDEX "service_page_services_grid_services_parent_id_idx" ON "service_page_services_grid_services" USING btree ("_parent_id");
  CREATE INDEX "service_page_sector_specialization_sectors_order_idx" ON "service_page_sector_specialization_sectors" USING btree ("_order");
  CREATE INDEX "service_page_sector_specialization_sectors_parent_id_idx" ON "service_page_sector_specialization_sectors" USING btree ("_parent_id");
  CREATE INDEX "service_page_sector_specialization_sectors_image_idx" ON "service_page_sector_specialization_sectors" USING btree ("image_id");
  CREATE INDEX "service_page_ican_faq_faqs_order_idx" ON "service_page_ican_faq_faqs" USING btree ("_order");
  CREATE INDEX "service_page_ican_faq_faqs_parent_id_idx" ON "service_page_ican_faq_faqs" USING btree ("_parent_id");
  CREATE INDEX "service_page_seo_seo_image_idx" ON "service_page" USING btree ("seo_image_id");
  CREATE INDEX "about_page_foundation_pillars_order_idx" ON "about_page_foundation_pillars" USING btree ("_order");
  CREATE INDEX "about_page_foundation_pillars_parent_id_idx" ON "about_page_foundation_pillars" USING btree ("_parent_id");
  CREATE INDEX "about_page_leadership_leaders_order_idx" ON "about_page_leadership_leaders" USING btree ("_order");
  CREATE INDEX "about_page_leadership_leaders_parent_id_idx" ON "about_page_leadership_leaders" USING btree ("_parent_id");
  CREATE INDEX "about_page_leadership_leaders_image_idx" ON "about_page_leadership_leaders" USING btree ("image_id");
  CREATE INDEX "about_page_accreditations_items_order_idx" ON "about_page_accreditations_items" USING btree ("_order");
  CREATE INDEX "about_page_accreditations_items_parent_id_idx" ON "about_page_accreditations_items" USING btree ("_parent_id");
  CREATE INDEX "about_page_hero_hero_background_image_idx" ON "about_page" USING btree ("hero_background_image_id");
  CREATE INDEX "about_page_seo_seo_image_idx" ON "about_page" USING btree ("seo_image_id");
  CREATE INDEX "home_page_compliance_badge_badges_order_idx" ON "home_page_compliance_badge_badges" USING btree ("_order");
  CREATE INDEX "home_page_compliance_badge_badges_parent_id_idx" ON "home_page_compliance_badge_badges" USING btree ("_parent_id");
  CREATE INDEX "home_page_services_items_points_order_idx" ON "home_page_services_items_points" USING btree ("_order");
  CREATE INDEX "home_page_services_items_points_parent_id_idx" ON "home_page_services_items_points" USING btree ("_parent_id");
  CREATE INDEX "home_page_services_items_order_idx" ON "home_page_services_items" USING btree ("_order");
  CREATE INDEX "home_page_services_items_parent_id_idx" ON "home_page_services_items" USING btree ("_parent_id");
  CREATE INDEX "home_page_our_impact_stats_order_idx" ON "home_page_our_impact_stats" USING btree ("_order");
  CREATE INDEX "home_page_our_impact_stats_parent_id_idx" ON "home_page_our_impact_stats" USING btree ("_parent_id");
  CREATE INDEX "home_page_hero_hero_background_image_idx" ON "home_page" USING btree ("hero_background_image_id");
  CREATE INDEX "home_page_our_impact_our_impact_image_idx" ON "home_page" USING btree ("our_impact_image_id");
  CREATE INDEX "home_page_seo_seo_image_idx" ON "home_page" USING btree ("seo_image_id");
  CREATE INDEX "home_page_rels_order_idx" ON "home_page_rels" USING btree ("order");
  CREATE INDEX "home_page_rels_parent_idx" ON "home_page_rels" USING btree ("parent_id");
  CREATE INDEX "home_page_rels_path_idx" ON "home_page_rels" USING btree ("path");
  CREATE INDEX "home_page_rels_blogs_id_idx" ON "home_page_rels" USING btree ("blogs_id");
  CREATE INDEX "contact_page_inquiry_form_service_options_order_idx" ON "contact_page_inquiry_form_service_options" USING btree ("_order");
  CREATE INDEX "contact_page_inquiry_form_service_options_parent_id_idx" ON "contact_page_inquiry_form_service_options" USING btree ("_parent_id");
  CREATE INDEX "contact_page_faq_items_order_idx" ON "contact_page_faq_items" USING btree ("_order");
  CREATE INDEX "contact_page_faq_items_parent_id_idx" ON "contact_page_faq_items" USING btree ("_parent_id");
  CREATE INDEX "contact_page_seo_seo_image_idx" ON "contact_page" USING btree ("seo_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "author" CASCADE;
  DROP TABLE "blog_categories" CASCADE;
  DROP TABLE "blogs_tags" CASCADE;
  DROP TABLE "blogs_table_of_contents" CASCADE;
  DROP TABLE "blogs" CASCADE;
  DROP TABLE "blogs_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "resource_page_statutory_forms_additional_downloads" CASCADE;
  DROP TABLE "resource_page_faqs_section_questions" CASCADE;
  DROP TABLE "resource_page" CASCADE;
  DROP TABLE "service_page_services_grid_services_features" CASCADE;
  DROP TABLE "service_page_services_grid_services" CASCADE;
  DROP TABLE "service_page_sector_specialization_sectors" CASCADE;
  DROP TABLE "service_page_ican_faq_faqs" CASCADE;
  DROP TABLE "service_page" CASCADE;
  DROP TABLE "about_page_foundation_pillars" CASCADE;
  DROP TABLE "about_page_leadership_leaders" CASCADE;
  DROP TABLE "about_page_accreditations_items" CASCADE;
  DROP TABLE "about_page" CASCADE;
  DROP TABLE "home_page_compliance_badge_badges" CASCADE;
  DROP TABLE "home_page_services_items_points" CASCADE;
  DROP TABLE "home_page_services_items" CASCADE;
  DROP TABLE "home_page_our_impact_stats" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "home_page_rels" CASCADE;
  DROP TABLE "contact_page_inquiry_form_service_options" CASCADE;
  DROP TABLE "contact_page_faq_items" CASCADE;
  DROP TABLE "contact_page" CASCADE;
  DROP TYPE "public"."enum_service_page_services_grid_services_icon";
  DROP TYPE "public"."enum_about_page_foundation_pillars_icon";
  DROP TYPE "public"."enum_about_page_accreditations_items_icon_type";
  DROP TYPE "public"."enum_about_page_accreditations_items_icon";
  DROP TYPE "public"."enum_home_page_services_items_icon";`)
}
