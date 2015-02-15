<?php
/**
 * Default config settings
 *
 * Enter any WordPress config settings that are default to all environments
 * in this file. These can then be overridden in the environment config files.
 * 
 * Please note if you add constants in this file (i.e. define statements) 
 * these cannot be overridden in environment config files.
 * 
 * @package    Studio 24 WordPress Multi-Environment Config
 * @version    1.0
 * @author     Studio 24 Ltd  <info@studio24.net>
 */
  

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '<&>Qnl3#RE|i,2lh.j$0Ne:Xk|Z-98x+<uUA>$lUDT0yc+[TTZY3**j9f/3|[5~~');
define('SECURE_AUTH_KEY',  'Q*VV+ ei$]@]r}]Ha$EqPl|:~e]smk9D?:aFM1.2Pxq5G:IKZ]wB^=O0:uxBaY}s');
define('LOGGED_IN_KEY',    '![mz6 #f0_ )#OkbXA14|VSC7u6+I9Er~Y|Ga_+`}--% KSl8g*n?tjHE[o&.<p>');
define('NONCE_KEY',        '(tmF!>F[lp^QjxkS70qW.p$=%+?-FA%!_8&4F`_UR9qgOQ51_P+l_h)5,Eer5>}t');
define('AUTH_SALT',        '1Y*Vuc) `q.}/I0|44$)oNmKRHF1doVlpP+Pg OU$?1:sE-OD-C7-SuH,(D/1/@5');
define('SECURE_AUTH_SALT', 'hbS+9noFyT(a%5]dT+u/$r?d5||+OAARFa`87J,FtRWn8{l*ti+s9p~lG*[vUTx@');
define('LOGGED_IN_SALT',   'Ll*h-lk|Z-tf!&Xq[&Pp5lX):1-U-e%8Ky,]OT?GwC`F54.>5($PH_H8.P*6L}Dc');
define('NONCE_SALT',       't/|lg~nJd(Gn+;v_D^n;p0kBU1yz5%;|_*ER+-~Pg(C#L.=W&Ss{$T!H_.$EYwIs');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');
