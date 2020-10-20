const core = require("@actions/core");
const exec = require("@actions/exec");

async function run() {
  try {
    // Validate p12 keys.
    if (!core.getInput("p12-base64")
      && (!core.getInput("p12-cer-base64") || !core.getInput("p12-cer-base64"))) {
      throw new Error("P12 keys missing or in the wrong format.");
    }
    process.env.PROJECT_PATH = core.getInput("project-path");
    process.env.P12_BASE64 = core.getInput("p12-base64");
    process.env.ADHOC_P12_BASE64 = core.getInput("p12-base64-adhoc");
    process.env.P12_KEY_BASE64 = core.getInput("p12-key-base64");
    process.env.P12_CER_BASE64 = core.getInput("p12-cer-base64");
    process.env.MOBILEPROVISION_BASE64 = core.getInput(
      "mobileprovision-base64"
    );
    process.env.ADHOC_MOBILEPROVISION_BASE64 = core.getInput(
      "mobileprovision-base64-adhoc"
    );
    process.env.DISTR_MOBILEPROVISION_BASE64 = core.getInput(
      "mobileprovision-base64-distribution"
    );
    process.env.CODE_SIGNING_IDENTITY = core.getInput("code-signing-identity");
    process.env.TEAM_ID = core.getInput("team-id");
    process.env.WORKSPACE_PATH = core.getInput("workspace-path");
    process.env.EXPORT_METHOD = core.getInput("export-method");
    process.env.CONFIGURATION = core.getInput("configuration");
    process.env.CERTIFICATE_PASSWORD = core.getInput("certificate-password");
    process.env.OUTPUT_DIRECTORY = core.getInput("output-directory");
    process.env.OUTPUT_NAME = core.getInput("output-name");
    process.env.SCHEME = core.getInput("scheme");
    process.env.DISABLE_TARGETS = core.getInput("disable-targets");
    process.env.EXPORT_OPTIONS = core.getInput("export-options");
    process.env.PODFILE_PATH = core.getInput("podfile-path");
    process.env.ARCHIVE_PATH = core.getInput("archive_path");

    //-------upload_symbols_to_crashlytics params---------------
    process.env.CRASHLYTICS_DSYM_PATH = core.getInput("upload-dsym-to-crashlytics");
    process.env.CRASHLYTICS_DSYM_PATH = core.getInput("crashlytics-dsym-path");
    process.env.CRASHLYTICS_API_TOKEN = core.getInput("crashlytics-api-token");
    process.env.CRASHLYTICS_GSP_PATH = core.getInput("crashlytics-gsp-path");
    process.env.CRASHLYTICS_APP_ID = core.getInput("crashlytics-app-id");
    process.env.CRASHLYTICS_BINARY_PATH = core.getInput("crashlytics-binary-path");
    process.env.CRASHLYTICS_DEBUG = core.getInput("crashlytics-debug");

    await exec.exec(`bash ${__dirname}/build.sh`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
