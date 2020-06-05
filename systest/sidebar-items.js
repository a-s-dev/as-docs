initSidebarItems({"fn":[["const_AES_BLOCK_SIZE",""],["const_CKA_CLASS",""],["const_CKA_EC_PARAMS",""],["const_CKA_EC_POINT",""],["const_CKA_ENCRYPT",""],["const_CKA_ID",""],["const_CKA_KEY_TYPE",""],["const_CKA_PRIVATE",""],["const_CKA_SENSITIVE",""],["const_CKA_SIGN",""],["const_CKA_TOKEN",""],["const_CKA_VALUE",""],["const_CKA_WRAP",""],["const_CKD_NULL",""],["const_CKK_EC",""],["const_CKM_AES_CBC_PAD",""],["const_CKM_AES_GCM",""],["const_CKM_ECDH1_DERIVE",""],["const_CKM_EC_KEY_PAIR_GEN",""],["const_CKM_NSS_HKDF_SHA256",""],["const_CKM_SHA256_HMAC",""],["const_CKM_SHA512_HMAC",""],["const_CKO_PRIVATE_KEY",""],["const_CK_FALSE",""],["const_CK_INVALID_HANDLE",""],["const_CK_TRUE",""],["const_EC_POINT_FORM_UNCOMPRESSED",""],["const_HASH_LENGTH_MAX",""],["const_NSS_INIT_FORCEOPEN",""],["const_NSS_INIT_NOCERTDB",""],["const_NSS_INIT_NOMODDB",""],["const_NSS_INIT_OPTIMIZESPACE",""],["const_NSS_INIT_READONLY",""],["const_PR_FALSE",""],["const_PR_TRUE",""],["const_SEC_ASN1_OBJECT_ID",""],["const_SHA256_LENGTH",""],["field_offset_size_CK_ATTRIBUTE",""],["field_offset_size_CK_GCM_PARAMS_V3",""],["field_offset_size_CK_NSS_HKDFParams",""],["field_offset_size_PLArena",""],["field_offset_size_PLArenaPool",""],["field_offset_size_SECAlgorithmIDStr",""],["field_offset_size_SECItemStr",""],["field_offset_size_SECKEYDHPublicKeyStr",""],["field_offset_size_SECKEYDSAPublicKeyStr",""],["field_offset_size_SECKEYECPublicKeyStr",""],["field_offset_size_SECKEYFortezzaPublicKeyStr",""],["field_offset_size_SECKEYKEAParamsStr",""],["field_offset_size_SECKEYKEAPublicKeyStr",""],["field_offset_size_SECKEYPQGParamsStr",""],["field_offset_size_SECKEYPrivateKeyStr",""],["field_offset_size_SECKEYPublicKeyStr",""],["field_offset_size_SECKEYRSAPublicKeyStr",""],["field_offset_size_SECOidDataStr",""],["fn_NSS_InitContext",""],["fn_NSS_SecureMemcmp",""],["fn_NSS_VersionCheck",""],["fn_PK11_CreateContextBySymKey",""],["fn_PK11_CreateGenericObject",""],["fn_PK11_CreatePBEV2AlgorithmID",""],["fn_PK11_Decrypt",""],["fn_PK11_Derive",""],["fn_PK11_DestroyContext",""],["fn_PK11_DestroyGenericObject",""],["fn_PK11_DigestBegin",""],["fn_PK11_DigestFinal",""],["fn_PK11_DigestOp",""],["fn_PK11_Encrypt",""],["fn_PK11_ExtractKeyValue",""],["fn_PK11_FindKeyByKeyID",""],["fn_PK11_FreeSlot",""],["fn_PK11_FreeSymKey",""],["fn_PK11_GenerateKeyPair",""],["fn_PK11_GenerateRandom",""],["fn_PK11_GetInternalSlot",""],["fn_PK11_GetKeyData",""],["fn_PK11_HashBuf",""],["fn_PK11_ImportSymKey",""],["fn_PK11_PBEKeyGen",""],["fn_PK11_PubDeriveWithKDF",""],["fn_PK11_ReadRawAttribute",""],["fn_PORT_FreeArena",""],["fn_PR_GetError",""],["fn_PR_GetErrorText",""],["fn_PR_GetErrorTextLength",""],["fn_SECITEM_FreeItem",""],["fn_SECKEY_ConvertToPublicKey",""],["fn_SECKEY_CopyPublicKey",""],["fn_SECKEY_DestroyPrivateKey",""],["fn_SECKEY_DestroyPublicKey",""],["fn_SECOID_DestroyAlgorithmID",""],["fn_SECOID_FindOIDByTag",""],["main",""],["roundtrip_CK_ATTRIBUTE",""],["roundtrip_CK_ATTRIBUTE_TYPE",""],["roundtrip_CK_BBOOL",""],["roundtrip_CK_BYTE",""],["roundtrip_CK_BYTE_PTR",""],["roundtrip_CK_GCM_PARAMS",""],["roundtrip_CK_GCM_PARAMS_V3",""],["roundtrip_CK_KEY_TYPE",""],["roundtrip_CK_MECHANISM_TYPE",""],["roundtrip_CK_NSS_HKDFParams",""],["roundtrip_CK_OBJECT_CLASS",""],["roundtrip_CK_OBJECT_HANDLE",""],["roundtrip_CK_ULONG",""],["roundtrip_CK_VOID_PTR",""],["roundtrip_PLArena",""],["roundtrip_PLArenaPool",""],["roundtrip_PRBool",""],["roundtrip_PRErrorCode",""],["roundtrip_PRInt32",""],["roundtrip_PRIntn",""],["roundtrip_PRUint32",""],["roundtrip_PRUword",""],["roundtrip_SECAlgorithmID",""],["roundtrip_SECAlgorithmIDStr",""],["roundtrip_SECItem",""],["roundtrip_SECItemStr",""],["roundtrip_SECKEYDHPublicKey",""],["roundtrip_SECKEYDHPublicKeyStr",""],["roundtrip_SECKEYDSAPublicKey",""],["roundtrip_SECKEYDSAPublicKeyStr",""],["roundtrip_SECKEYECParams",""],["roundtrip_SECKEYECPublicKey",""],["roundtrip_SECKEYECPublicKeyStr",""],["roundtrip_SECKEYFortezzaPublicKey",""],["roundtrip_SECKEYFortezzaPublicKeyStr",""],["roundtrip_SECKEYKEAParams",""],["roundtrip_SECKEYKEAParamsStr",""],["roundtrip_SECKEYKEAPublicKey",""],["roundtrip_SECKEYKEAPublicKeyStr",""],["roundtrip_SECKEYPQGParams",""],["roundtrip_SECKEYPQGParamsStr",""],["roundtrip_SECKEYPrivateKey",""],["roundtrip_SECKEYPrivateKeyStr",""],["roundtrip_SECKEYPublicKey",""],["roundtrip_SECKEYPublicKeyStr",""],["roundtrip_SECKEYRSAPublicKey",""],["roundtrip_SECKEYRSAPublicKeyStr",""],["roundtrip_SECOidData",""],["roundtrip_SECOidDataStr",""],["roundtrip_padding_CK_ATTRIBUTE",""],["roundtrip_padding_CK_ATTRIBUTE_TYPE",""],["roundtrip_padding_CK_BBOOL",""],["roundtrip_padding_CK_BYTE",""],["roundtrip_padding_CK_BYTE_PTR",""],["roundtrip_padding_CK_GCM_PARAMS",""],["roundtrip_padding_CK_GCM_PARAMS_V3",""],["roundtrip_padding_CK_KEY_TYPE",""],["roundtrip_padding_CK_MECHANISM_TYPE",""],["roundtrip_padding_CK_NSS_HKDFParams",""],["roundtrip_padding_CK_OBJECT_CLASS",""],["roundtrip_padding_CK_OBJECT_HANDLE",""],["roundtrip_padding_CK_ULONG",""],["roundtrip_padding_CK_VOID_PTR",""],["roundtrip_padding_PLArena",""],["roundtrip_padding_PLArenaPool",""],["roundtrip_padding_PRBool",""],["roundtrip_padding_PRErrorCode",""],["roundtrip_padding_PRInt32",""],["roundtrip_padding_PRIntn",""],["roundtrip_padding_PRUint32",""],["roundtrip_padding_PRUword",""],["roundtrip_padding_SECAlgorithmID",""],["roundtrip_padding_SECAlgorithmIDStr",""],["roundtrip_padding_SECItem",""],["roundtrip_padding_SECItemStr",""],["roundtrip_padding_SECKEYDHPublicKey",""],["roundtrip_padding_SECKEYDHPublicKeyStr",""],["roundtrip_padding_SECKEYDSAPublicKey",""],["roundtrip_padding_SECKEYDSAPublicKeyStr",""],["roundtrip_padding_SECKEYECParams",""],["roundtrip_padding_SECKEYECPublicKey",""],["roundtrip_padding_SECKEYECPublicKeyStr",""],["roundtrip_padding_SECKEYFortezzaPublicKey",""],["roundtrip_padding_SECKEYFortezzaPublicKeyStr",""],["roundtrip_padding_SECKEYKEAParams",""],["roundtrip_padding_SECKEYKEAParamsStr",""],["roundtrip_padding_SECKEYKEAPublicKey",""],["roundtrip_padding_SECKEYKEAPublicKeyStr",""],["roundtrip_padding_SECKEYPQGParams",""],["roundtrip_padding_SECKEYPQGParamsStr",""],["roundtrip_padding_SECKEYPrivateKey",""],["roundtrip_padding_SECKEYPrivateKeyStr",""],["roundtrip_padding_SECKEYPublicKey",""],["roundtrip_padding_SECKEYPublicKeyStr",""],["roundtrip_padding_SECKEYRSAPublicKey",""],["roundtrip_padding_SECKEYRSAPublicKeyStr",""],["roundtrip_padding_SECOidData",""],["roundtrip_padding_SECOidDataStr",""],["roundtrip_padding_size_t",""],["roundtrip_size_t",""],["run_all",""],["same",""],["sign_CK_ATTRIBUTE_TYPE",""],["sign_CK_BBOOL",""],["sign_CK_BYTE",""],["sign_CK_KEY_TYPE",""],["sign_CK_MECHANISM_TYPE",""],["sign_CK_OBJECT_CLASS",""],["sign_CK_OBJECT_HANDLE",""],["sign_CK_ULONG",""],["sign_PRBool",""],["sign_PRErrorCode",""],["sign_PRInt32",""],["sign_PRIntn",""],["sign_PRUint32",""],["sign_PRUword",""],["sign_size_t",""],["size_align_CK_ATTRIBUTE",""],["size_align_CK_ATTRIBUTE_TYPE",""],["size_align_CK_BBOOL",""],["size_align_CK_BYTE",""],["size_align_CK_BYTE_PTR",""],["size_align_CK_GCM_PARAMS",""],["size_align_CK_GCM_PARAMS_V3",""],["size_align_CK_KEY_TYPE",""],["size_align_CK_MECHANISM_TYPE",""],["size_align_CK_NSS_HKDFParams",""],["size_align_CK_OBJECT_CLASS",""],["size_align_CK_OBJECT_HANDLE",""],["size_align_CK_ULONG",""],["size_align_CK_VOID_PTR",""],["size_align_PLArena",""],["size_align_PLArenaPool",""],["size_align_PRBool",""],["size_align_PRErrorCode",""],["size_align_PRInt32",""],["size_align_PRIntn",""],["size_align_PRUint32",""],["size_align_PRUword",""],["size_align_SECAlgorithmID",""],["size_align_SECAlgorithmIDStr",""],["size_align_SECItem",""],["size_align_SECItemStr",""],["size_align_SECKEYDHPublicKey",""],["size_align_SECKEYDHPublicKeyStr",""],["size_align_SECKEYDSAPublicKey",""],["size_align_SECKEYDSAPublicKeyStr",""],["size_align_SECKEYECParams",""],["size_align_SECKEYECPublicKey",""],["size_align_SECKEYECPublicKeyStr",""],["size_align_SECKEYFortezzaPublicKey",""],["size_align_SECKEYFortezzaPublicKeyStr",""],["size_align_SECKEYKEAParams",""],["size_align_SECKEYKEAParamsStr",""],["size_align_SECKEYKEAPublicKey",""],["size_align_SECKEYKEAPublicKeyStr",""],["size_align_SECKEYPQGParams",""],["size_align_SECKEYPQGParamsStr",""],["size_align_SECKEYPrivateKey",""],["size_align_SECKEYPrivateKeyStr",""],["size_align_SECKEYPublicKey",""],["size_align_SECKEYPublicKeyStr",""],["size_align_SECKEYRSAPublicKey",""],["size_align_SECKEYRSAPublicKeyStr",""],["size_align_SECOidData",""],["size_align_SECOidDataStr",""],["size_align_size_t",""]],"static":[["FAILED",""],["NTESTS",""]],"trait":[["Pretty",""]]});